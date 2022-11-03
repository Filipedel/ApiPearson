
const express = require("express");
const server = express();
const {Router} = require ("express");
const path = require("path");
const dummyu = require("./bd/routes");



//This server can use json communication
server.use(express.json());

//use static files
server.use(express.static("client/build"));


//use Database
server.use("/api/Dummy",dummyu);



server.get("/*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})





server.listen(3000,()=> console.log("Server listening to the port 3000"));

