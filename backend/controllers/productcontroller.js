const productModel = require("../models/productmodel")

exports.getProducts = async ( req,res,next) =>
{
    const query = req.query.keyword?{
        name:{
        $regex: req.query.keyword,
        $options: "i"
    }} :{}
    const products = await productModel.find(query); 
    res.json({
         success : true,
         products
    })
}

 exports.singleProduct = async ( req,res, next)=>
 {
    try{
        const product = await productModel.findById(req.params.id)
        res.json({
            success : true,
            product
            
       })

    }
    catch
    {
        res.status.json(404)(
            {
                  success : false,
            message : "Invalid id"

            }
        )

    }
   

 }
 