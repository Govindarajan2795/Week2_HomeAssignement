
// Step 1: Declare a global variable and assign the value "Chrome".
let browser = "Chrome";

// Step 2: Create a function that accepts a callback function as an argument.
function checkBrowserVersion(callback) {
    // Step 3: Use setTimeout to simulate a 2-second delay.
    setTimeout(() => {
        // Step 4: Invoke the callback function and pass the browser value.
        callback(browser);
    }, 2000);
}

// Step 5: Create a callback function to log the browser version.
function displayBrowserVersion(browserVersion) {
    console.log("Browser Version: " + browserVersion);
}

// Step 6: Call the function and pass the callback function as an argument.
checkBrowserVersion(displayBrowserVersion);
