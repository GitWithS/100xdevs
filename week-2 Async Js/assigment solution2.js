// Function to return a promisified version of fetch
const fetchData = (url) => {
    // Returns a promise that resolves or rejects based on fetch response
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => Promise.reject(error));
};

// Calling the fetchData function with a sample API URL
fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => console.log(data))
    .catch(error => console.error("Fetch error:", error));
