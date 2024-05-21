//Homepages like "/" or /dashboard will be here

const express = require("express");
const router = express.Router();

router.get('/', (req, res) =>

    res.render("Welcome")
);

module.exports = router;