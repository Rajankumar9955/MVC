


const express=require("express");
const route=express.Router();

const EmpController=require("../Controller/empController");

route.get("/", EmpController.empHome);
route.get("/insert", EmpController.empInsert);
route.get("/display", EmpController.empDisplay);
route.get("/contact", EmpController.empContact);
route.post("/datasave", EmpController.studatasave);
route.get("/recdel", EmpController.recordDelete);

module.exports=route;