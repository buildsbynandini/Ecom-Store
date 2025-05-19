const exp = require("express");
const app = exp();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
dotenv.config({path:path.join(__dirname, "config", "config.env")})
 const cdbs = require("./config/CDBS")


const product = require("./routes/product");
const order = require("./routes/order");


cdbs();

app.use(exp.json()); 
app.use(cors());

app.use("/api/p1",product)
app.use("/api/p1",order)

// to take values from req body as json 





app.listen(process.env.PORT,()=>
{
    console.log(`server is running:${process.env.PORT}`)
})