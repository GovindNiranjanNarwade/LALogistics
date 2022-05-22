const express = require("express")
const {getStateWithCity} =require("../controller/state_controller")
const router = express.Router()
router.route("/getStateWithCity").get( getStateWithCity)
// @url => http://192.168.43.220:37234/api/v1/getStateWithCity
// @method => GET


module.exports = router