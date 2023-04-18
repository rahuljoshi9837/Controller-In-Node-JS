const express = require("express");
const {allData, particularData} = require("../controllers/demoController");

const router = express.Router();

router.get("/all", allData);


router.get('/delete/:id([0-9]{2})', particularData);

module.exports = router;