const express = require("express")
const {getAllCity} =require("../controller/city_controller")
const router = express.Router()
router.route("/getAllCity").get( getAllCity)
// @url => http://192.168.43.220:37234/api/v1/getAllCity
// @method => GET


module.exports = router