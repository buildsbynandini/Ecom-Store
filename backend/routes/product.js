const exp = require("express");
const { getProducts, singleProduct } = require("../controllers/productcontroller");

const router = exp.Router();
router.route("/product").get(getProducts);
router.route("/product/:id").get(singleProduct);
 module.exports = router;