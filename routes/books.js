const express = require('express');
const Router = express.Router;

// require controller
const {
    create,
    getAll,
    update,
    deletes,
} = require('../controllers/books');

// create the router 
booksRoutes = Router();

// add handlers for my routes

// GET
booksRoutes.get('/', getAll);

// POST
booksRoutes.post('/', create);

// PUT
booksRoutes.put('/', update);

// DELETE
booksRoutes.delete('/', deletes);

//export the router
module.exports = booksRoutes;

