
// const EmpModel=require("../Model/empModel")

// const empHome=(req, res)=>{
//     res.render("Home")
// }
// const empInsert=(req,res)=>{
//     res.render("Insert")
// }
// const empDisplay=async(req,res)=>{
//     const myData=await EmpModel.find();
//     console.log(myData);
//     res.render("Display", {Data:myData});
// }
// const empContact=async(req,res)=>{
//     const Data=await EmpModel.find();
//     console.log(Data);
//     res.render("Contact", {Data:Data})
// }

// const studatasave=(req,res)=>{
//     const {eno,nm,ct,sal}=req.body;
//     EmpModel.create({
//         empno:eno,
//         name:nm,
//         city:ct,
//         salary:sal
//     })
//     res.render("Insert");
// }

// const recordDelete=async(req,res)=>{
//   const Myid=req.query.id;
//   await EmpModel.findByIdAndDelete(Myid);

//   const Data=await EmpModel.find();
//   res.render("Contact", {Data:Data});

//   res.render("Home");
// }
// module.exports={
//     empHome,
//     empInsert,
//     empDisplay,
//     empContact,
//     studatasave,
//     recordDelete
// }


// =============================================================

const EmpModel=require("../Model/empModel")
const empHome=(req,res)=>{
    res.render("Home")
}
const empInsert=(req,res)=>{
    res.render("Insert")
}
const empDisplay=async(req,res)=>{
    const Mydata=await EmpModel.find();
    res.render("Display",{Data:Mydata});
}
const empContact=async(req,res)=>{
    const Data=await EmpModel.find();
    res.render("Contact",{Data:Data});
}
const StudentDataSave=(req,res)=>{
    const {eno,nm,ct,sal}=req.body;
    EmpModel.create({
        empno:eno,
        name:nm,
        city:ct,
        salary:sal

    })
    res.render("Insert")
}
const studataDelete=async(req,res)=>{
    const myid=req.query.id;
   await EmpModel.findByIdAndDelete(myid)

    const Data=await EmpModel.find();
    res.render("Contact", {Data:Data});
    // res.render("Home");


}
module.exports={
    empHome,
    empInsert,
    empDisplay,
    empContact,
    StudentDataSave,
    studataDelete,
}























