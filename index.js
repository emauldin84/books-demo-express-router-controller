// require express
const express = require('express');
// assign port
const port = 3000;
// create an app with express
const app = express();

// require Routers
const bookRouter = require('./routes/books')

// connect to a router
app.use('/books', bookRouter);

// express to listen on port 3000
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})