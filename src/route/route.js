const express = require('express')
const router = express.Router();

const controller  = require("../controller/apiController")

//route handlers
router.post("/add" , controller.add)
router.post("/sub" , controller.sub)
router.post("/multi" , controller.multi)
router.post("/divide" , controller.divide)

module.exports = router