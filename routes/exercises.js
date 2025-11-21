const express = require("express");
const router = express.Router();
const exercises = require("../data/exercises.json");

// GET /exercises
router.get("/", (req, res) => {
    res.json(exercises);
});

module.exports = router;
