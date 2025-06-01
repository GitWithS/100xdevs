// Import the fs module
const fs = require('fs').promises;

// Function to return a promisified version of fs.readFile
const readFileAsync = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (error) {
        throw error;
    }
};

// Call the readFileAsync function with the path of the file to read
readFileAsync('a.txt')
    .then(data => console.log(data))
    .catch(error => console.error("Error reading file:", error));
