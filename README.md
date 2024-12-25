# Unhandled Promise Rejection in Express.js Async Route

This repository demonstrates a common error in Express.js applications: neglecting proper error handling within asynchronous route handlers.  When an asynchronous operation within a route fails, without explicit error handling, the error might be silently logged or even crash the server, leaving the client with no feedback. 

The `bug.js` file showcases this issue, while `bugSolution.js` provides a corrected version with robust error handling.

## Bug

The `bug.js` file contains an Express.js route that performs an asynchronous operation. If the asynchronous operation fails, the error is only logged to the console, and the client receives no response.  This can lead to frustrating user experiences and difficulties in debugging.

## Solution

The `bugSolution.js` demonstrates how to fix this problem.  It uses a `try...catch` block or `.catch()` method to handle potential errors within the asynchronous operation, sending an appropriate error response to the client.  This ensures that the client receives feedback even if an error occurs.