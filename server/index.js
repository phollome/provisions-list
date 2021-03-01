const path = require("path");
const spawn = require("child_process").spawn;

const components = ["gateway.js", "endpoint.js"];

components.forEach((component) => {
  const process = spawn("node", [path.join(__dirname, component)]);
  process.stdout.on("data", function (data) {
    console.log(data.toString());
  });

  process.stderr.on("data", function (err) {
    console.error(err.toString());
  });

  process.on("exit", function () {
    console.log(`exit ${component}`);
  });
});
