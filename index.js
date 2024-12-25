

const express=require("express");
const app=express();

const mongoose= require("mongoose");
const bodyparser=require("body-parser");
const port=8000;

const EmpRout=require("./Routes/employeeRoutes");
mongoose.connect("mongodb://127.0.0.1:27017/rajan").then(()=>{
    console.log("DB Connected!!!")
})

app.set("view engine","ejs");

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

app.use("/", EmpRout);

app.listen(port, ()=>{
    console.log(`server run on ${port}`);
})