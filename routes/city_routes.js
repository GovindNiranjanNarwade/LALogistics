const express = require("express")
const {getAllCity,getCityBytheirState} =require("../controller/city_controller")
const router = express.Router()
router.route("/getAllCity").get( getAllCity)
// @url => http://192.168.43.220:37234/api/v1/getAllCity
// @method => GET
router.route("/getCityBytheirState").get( getCityBytheirState)
// @url => http://192.168.43.220:37234/api/v1/getCityBytheirState
// @method => GET


module.exports = router