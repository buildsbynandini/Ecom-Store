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
exports.home = async(req,res)=>{
    try {
        res.status(200).json({message:"Welcome to backend"})
    } catch (error) {
        res.status(404).json({error:"404 Not Found"})
        console.log("Internal Server error in Home");
        
    }
}