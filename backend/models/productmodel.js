const mongoose = require ("mongoose");
const productSchema = mongoose.Schema(
    { name: String,
      price: String,
      description : String,
      rating : String,
      images:[
        {image:String}
      ],
      category : String,
      seller : String,
      stock : String,
      noofreveiws : String,
      createdat : Date 


    }
) 
// connecting schema and collection
 const productModel =mongoose.model("product",productSchema);

module.exports = productModel;