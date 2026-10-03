import autocannon from "autocannon";
import http from "http";

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "localhost";
const BASE_URL = `http://${HOST}:${PORT}`;
const LOGIN_URL = `${BASE_URL}/api/auth/login`;

// User credentials to test
// const TEST_EMAIL = process.env.TEST_EMAIL || "testuser@example.com";
// const TEST_PASSWORD = process.env.TEST_PASSWORD || "yourpassword123";

const TEST_EMAIL = "calender3434@gmail.com";
const TEST_PASSWORD = "Listkaro9735$@";

const concurrencyStages = [25, 50, 100, 250, 500, 1000];
const STAGE_DURATION_SEC = 10; // 10 seconds per concurrency level

// Quick check if the server is accessible
async function checkServerHealth() {
  return new Promise((resolve) => {
    const req = http.get(`${BASE_URL}/health`, (res) => {
      resolve(res.statusCode === 200);
    });
    req.on("error", () => resolve(false));
    req.setTimeout(2000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

function runStage(connections) {
  return new Promise((resolve) => {
    console.log(`\n======================================================`);
    console.log(
      `▶ Stage: ${connections} concurrent connections for ${STAGE_DURATION_SEC}s`,
    );
    console.log(`======================================================`);

    const instance = autocannon(
      {
        url: LOGIN_URL,
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: TEST_EMAIL,
          password: TEST_PASSWORD,
        }),
        connections,
        duration: STAGE_DURATION_SEC,
        pipelining: 1,
      },
      (err, results) => {
        if (err) {
          console.error("Autocannon run error:", err);
          return resolve(null);
        }
        return resolve(results);
      },
    );

    autocannon.track(instance, { renderProgressBar: true });
  });
}

async function main() {
  console.log(`\n--- ListKaro Login Load & Stress Tester ---`);
  console.log(`Target: ${LOGIN_URL}`);
  console.log(`Testing with user email: ${TEST_EMAIL}`);

  // 1. Verify server is running
  const isUp = await checkServerHealth();
  if (!isUp) {
    console.error(
      `\n❌ Server is NOT running at ${BASE_URL}.` +
        `\nPlease start your backend server first with: npm run dev\n`,
    );
    process.exit(1);
  }
  console.log(`Server health check passed (200 OK).\n`);

  let breakingPoint = null;

  for (const conn of concurrencyStages) {
    const result = await runStage(conn);

    if (!result) {
      breakingPoint = `${conn} connections (Connection aborted or server crashed)`;
      break;
    }

    const {
      statusCodeStats = {},
      timeouts = 0,
      errors = 0,
      non2xx = 0,
    } = result;
    const count2xx = statusCodeStats[200]?.count || 0;
    const count4xx =
      (statusCodeStats[400]?.count || 0) +
      (statusCodeStats[401]?.count || 0) +
      (statusCodeStats[403]?.count || 0) +
      (statusCodeStats[404]?.count || 0);
    const count5xx = statusCodeStats[500]?.count || 0;

    const totalRequests = result.requests.total;
    const reqPerSec = result.requests.average;
    const avgLatency = result.latency.average;
    const p99Latency = result.latency.p99;

    console.log(`\n--- Results for ${conn} Connections ---`);
    console.log(`Total Requests:    ${totalRequests} (~${reqPerSec} req/sec)`);
    console.log(`Avg Latency:       ${avgLatency} ms (P99: ${p99Latency} ms)`);
    console.log(`2xx Success:       ${count2xx}`);
    console.log(
      `4xx Client Error:  ${count4xx} (e.g., invalid creds / unverified)`,
    );
    console.log(`5xx Server Error:  ${count5xx}`);
    console.log(`Timeouts:          ${timeouts}`);
    console.log(`Connection Errors: ${errors}`);

    // Check if server is dead or crashing
    const stillAlive = await checkServerHealth();
    if (!stillAlive) {
      breakingPoint = `CRASH: Server process exited or froze at ${conn} concurrent connections!`;
      break;
    }

    // Check failure thresholds (>15% timeouts or >10% 500 errors)
    if (timeouts > totalRequests * 0.15 || count5xx > totalRequests * 0.1) {
      breakingPoint = `DEGRADATION: Severe failure at ${conn} concurrent users (>15% timeouts or 5xx server errors).`;
      break;
    }
  }

  console.log(`\n================== SUMMARY ==================`);
  if (breakingPoint) {
    console.log(`💥 Breaking Point Found: ${breakingPoint}`);
  } else {
    console.log(
      ` Passed all concurrency levels up to ${concurrencyStages[concurrencyStages.length - 1]} connections without crashing!`,
    );
  }
  console.log(`=============================================\n`);
}

main().catch(console.error);
