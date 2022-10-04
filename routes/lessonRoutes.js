const express = require('express');
const router = express.Router();

const { getAllLessons, getLessonById } = require("../controllers/Lessons/lessonsController")

// get all lessons
router.get('/all-lessons', getAllLessons)

// get one lesson by id
router.post('/:id', getLessonById)


module.exports = router