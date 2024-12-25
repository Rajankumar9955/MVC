
const EmpModel=require("../Model/empModel")

const empHome=(req, res)=>{
    res.render("Home")
}
const empInsert=(req,res)=>{
    res.render("Insert")
}
const empDisplay=(req,res)=>{
    res.render("Display")
}
const empContact=(req,res)=>{
    res.render("Contact")
}

const studatasave=(req,res)=>{
    const {eno,nm,ct,sal}=req.body;
    EmpModel.create({
        empno:eno,
        name:nm,
        city:ct,
        salary:sal
    })
    res.render("Insert");
}

module.exports={
    empHome,
    empInsert,
    empDisplay,
    empContact,
    studatasave
}