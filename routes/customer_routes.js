const express = require("express")
const{CreateCustomer,deleteCustomer,getCustomer,updateCustomer,getSingleCustomer}=require("../controller/customer_controller")
const router = express.Router()
router.route("/CreateCustomer").post(CreateCustomer )
// route http://192.168.43.220:5000/api/v1/customer/CreateCustomer
//method post
router.route("/getCustomer").get(getCustomer)
// route http://192.168.43.220:5000/api/v1/customer/getCustomer
//method get
router.route("/deleteCustomer/:id").delete(deleteCustomer)
// route http://192.168.43.220:5000/api/v1/customer/deleteCustomer
//method delete
router.route("/updateCustomer/:id").put(updateCustomer)
// route http://192.168.43.220:5000/api/v1/customer/updateCustomer
//method put
router.route("/getSingleCustomer/:id").get(getSingleCustomer)
// route http://192.168.43.220:5000/api/v1/customer/getSingleCustomer
//method put

module.exports = router 