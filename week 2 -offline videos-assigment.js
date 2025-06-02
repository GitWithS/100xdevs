// Import the fs module to work with files
const fs = require("fs");

// Function to read a file, clean its contents, and save it back
function cleanFile(filePath) {
  return new Promise((resolve, reject) => {
    // Read the file contents
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) return reject(err); // If there's an error while reading, exit

      // Trim unnecessary spaces from both ends of the file content
      data = data.trim();

      // Write the cleaned content back to the same file
      fs.writeFile(filePath, data, (err) => {
        if (err) return reject(err); // If writing fails, exit
        resolve(); // Resolve the promise once it's saved successfully
      });
    });
  });
}

// Async function that handles the cleaning process
async function solve() {
  // Clean up the file
  await cleanFile("a.txt");
  console.log("Done cleaning file"); // Let the user know the process is finished
}

// Start the process
solve();
