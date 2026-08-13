require("dotenv").config();
const express = require("express");
 const connectdb= require("./Config/database");


const app = express();



connectdb().then(()=>{
    console.log("database connected");
    app.listen(3000, () => {
    console.log("Server running on port 3000");
});
}).catch(err =>{
    console.error("database not connected");
})


