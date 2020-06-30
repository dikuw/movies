const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');

//  CREATE
router.post('/movie', movieController.createMovie);
//  UPDATE
router.put('/movie/:id', movieController.updateMovie);
//  DELETE
router.delete('/movie/:id', movieController.deleteMovie);
//  GET ONE
router.get('/movie/:id', movieController.getMovieById);
//  GET ALL
router.get('/movies', movieController.getMovies);

module.exports = router;