const { spawn } = require("child_process");

exports.handler = async (event, context) => {
  return new Promise((resolve, reject) => {
    const process = spawn("./functions/script"); // Use 'script.exe' on Windows
    let output = "";

    process.stdout.on("data", (data) => {
      output += data.toString();
    });

    process.stderr.on("data", (data) => {
      console.error(`Error: ${data}`);
    });

    process.on("close", (code) => {
      resolve({
        statusCode: 200,
        body: `Executable ran with output: ${output}`,
      });
    });
  });
};
