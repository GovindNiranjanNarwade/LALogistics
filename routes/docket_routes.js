const express = require("express")
const{CreateDocketDetails,getDocketDetails,deleteDocket,updateDocket,getSingleDocket,SearchDocketByStatus}=require("../controller/docket_controller")
const router = express.Router()
router.route("/CreateDocketDetails").post(CreateDocketDetails )
// route http://192.168.43.220:5000/api/v1/docket/CreateDocketDetails
//method post
router.route("/getDocketDetails").get(getDocketDetails)
// route http://192.168.43.220:5000/api/v1/docket/getDocketDetails
//method get
router.route("/deleteDocket/:id").delete(deleteDocket)
// route http://192.168.43.220:5000/api/v1/docket/deleteDocket
//method delete
router.route("/updateDocket/:id").put(updateDocket)
// route http://192.168.43.220:5000/api/v1/docket/updateDocket
//method put
router.route("/getSingleDocket/:id").get(getSingleDocket)
// route http://192.168.43.220:5000/api/v1/docket/getSingleDocket
//method get
router.route("/SearchDocketByStatus/status").get(SearchDocketByStatus)
// route http://192.168.43.220:5000/api/v1/SearchDocketByStatus/status
//method get

module.exports = router 