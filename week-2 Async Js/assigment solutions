// Function to create a promisified version of setTimeout
const delay = (duration) => {
    // Returns a promise that resolves after the given duration
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

// Calling the delay function with a time of 2 seconds
delay(2000).then(() => {
    console.log("Executed after 2 seconds");
});
