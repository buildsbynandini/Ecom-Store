const exp = require("express");
const { ordermkn,home } = require("../controllers/ordercontroller");
const router = exp.Router();

router.route("/order").post(ordermkn)
router.get("/",home)
module.exports = router
