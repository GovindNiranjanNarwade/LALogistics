const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger._output.json')
const env = require("dotenv")
env.config({path:"./config/.env"})
const cors =require("cors")
const db = require("./config/db")
const superadmin = require("./routes/admin_routes")
const superadminLogin =require("./routes/adminLogin_-routes")
const customer = require("./routes/customer_routes")
const officeAdmin = require("./routes/office_routes")
const forgotPasswordforAdmin =require("./routes/forgotPasswordforsuperAdmin")
const docket =require("./routes/docket_routes")
const billing = require("./routes/billing_routes")
const enquiry =require("./routes/enquiry_routes")
const DeliveryBoyDetails =require("./routes/DeliveryBoyDetails_routes")
const PickupDetails =require("./routes/pickupDetails_routes")
const MenifestDetails =require("./routes/menifestDetails_routes")
const InscanDetails =require("./routes/Inscan_routes")
const PODDetails =require("./routes/PodDetails_routes")
const DRSDetails =require("./routes/DRSDetails_routes")
const GroupDetails =require("./routes/GroupDetails_routes")
db()
app.use(express.json())
app.use(express.static('public'));
app.use(cors())
app.use('/api/v1',superadmin)
app.use('/api/v1',superadminLogin)
app.use('/api/v1/customer',customer)
app.use('/api/v1/officeAdmin',officeAdmin)
app.use('/api/v1/forgotPassword',forgotPasswordforAdmin)
app.use('/api/v1/docket',docket)
app.use('/api/v1/billing',billing)
app.use('/api/v1/enquiry',enquiry)
app.use('/api/v1',DeliveryBoyDetails)
app.use('/api/v1',PickupDetails)
app.use('/api/v1',MenifestDetails)
app.use('/api/v1',InscanDetails)
app.use('/api/v1',PODDetails)
app.use('/api/v1',GroupDetails)
app.use('/api/v1/DRS',DRSDetails)
app.use('/swagger-api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// swagger api http://192.168.43.220:37234/swagger-api-doc/
app.listen(process.env.PORT, () => console.log(`http://192.168.43.220:${process.env.PORT ||5000}`))
//https://git.heroku.com/lalogistics.git/swagger-api-doc/
require('./endpoints')(app)
