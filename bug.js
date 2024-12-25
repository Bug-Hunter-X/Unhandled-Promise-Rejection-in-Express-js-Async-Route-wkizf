const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling is missing here
    console.error(error); // This will log the error but not send a response to the client
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5;
  if (!success) {
    throw new Error('Something went wrong!');
  }
}