const mongoose = require ("mongoose");
const orderSchema = mongoose.Schema({
    cartItems : Array,
    amount: String,
    Status : String,
    createdAt : Date
})

const ordermodel = mongoose.model("order", orderSchema)

module.exports= ordermodel;