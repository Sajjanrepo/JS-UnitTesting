const fs = require('fs');
const path = require('path');

// This will create a log file for each .test.js file, overwriting the previous content
afterEach(() => {
  const currentFileName = expect.getState().testPath;

  // Extract the test file name without the path
  const testFileName = path.basename(currentFileName, '.test.js');

  // Define the log file path inside logs directory
  const logFilePath = path.join(__dirname, 'logs', `${testFileName}.txt`);

  // Create logs directory if it doesn't exist
  if (!fs.existsSync(path.join(__dirname, 'logs'))) {
    fs.mkdirSync(path.join(__dirname, 'logs'));
  }

  // Log content
  const logContent = `Logs for ${testFileName}:\nTest execution started...\nTest passed!`;

  // Write to the log file (this will overwrite the file each time)
  fs.writeFileSync(logFilePath, logContent);
});