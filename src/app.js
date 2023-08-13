const express = require("express");
const app = express();

const path = require("path");

app.use(express.static("public"));

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log("puerto 3000 escuchando"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/home.html"));
});
app.get("/views/registro.html",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/registro.html"))
})
app.get("/src/views/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
})