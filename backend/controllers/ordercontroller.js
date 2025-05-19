const ordermodel = require("../models/ordermodel")
const productmodel = require("../models/productmodel")

exports.ordermkn= async (req,res,next)=>
{
    const items = req.body;
    const price = Number(items.reduce((acc,item)=>(acc+item.product.price * item.qty),0)).toFixed(2);
    const  Status= "pending"

    const order= await ordermodel.create(
        {
            cartItems : items,
            amount: price,
            Status
    
        }
    )
    items.forEach(async(item)=>{
        const product=await productmodel.findById(item.product._id);
        product.stock=product.stock-item.qty;
        await product.save();
    })
    
    
    res.json({
        success: true,
       order
    })



}