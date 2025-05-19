const exp = require("express");
const { ordermkn } = require("../controllers/ordercontroller");
const router = exp.Router();

router.route("/order").post(ordermkn)
module.exports = router
