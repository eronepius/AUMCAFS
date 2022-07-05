const express = require("express")
const router = express.Router()

//local imports
const test = require("../controllers/test")
const login = require("../controllers/login")

router.get("/api/test", test)
router.post("/api/login", login)

module.exports = router