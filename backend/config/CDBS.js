const mongoose = require ("mongoose");
 const cdbs =()=>
 {
    mongoose.connect(process.env.DB_URL).then((con) =>
    {
        console.log("mongodb is connected "+ con.connection.host);
    }
 )}

 module.exports= cdbs;