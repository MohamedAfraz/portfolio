const { spawn } = require('child_process');

exports.handler = async (event, context) => {
    return new Promise((resolve, reject) => {
        console.log('Running executable...');

        // Adjust the path if necessary (make sure it's relative to where run-script.js is located)
        const process = spawn('sh', ['./functions/script']); // Use 'sh' if it's a shell script or make sure the path is correct

        let output = '';
        let errorOutput = '';

        // Collect the output
        process.stdout.on('data', (data) => {
            console.log(`STDOUT: ${data}`);
            output += data.toString();
        });

        // Collect error output
        process.stderr.on('data', (data) => {
            console.error(`STDERR: ${data}`);
            errorOutput += data.toString();
        });

        // When the process closes, check the exit code
        process.on('close', (code) => {
            console.log(`Process exited with code ${code}`);
            if (code === 0) {
                resolve({
                    statusCode: 200,
                    body: `Script executed successfully: ${output}`,
                });
            } else {
                reject({
                    statusCode: 500,
                    body: `Script failed with code ${code}: ${errorOutput}`,
                });
            }
        });
    });
};
