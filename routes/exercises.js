const express = require("express");
const router = express.Router();
const exercises = require("../data/exercises.json");
const filterExercises = require("../utils/filter");

// GET /exercises
router.get("/", (req, res) => {
    const { muscles } = req.query;

    // If no muscles given, return all
    if (!muscles) {
        return res.json(exercises);
    }

    const selectedMuscles = muscles.split(",");

    const filtered = filterExercises(exercises, selectedMuscles);

    res.json(filtered);
});

module.exports = router;
