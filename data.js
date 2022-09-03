const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://shree:shree@cluster0.ayj7s.mongodb.net/?retryWrites=true&w=majority',{
    dbName:"customer"
}).then(()=>console.log("connected")).catch((e)=>console.log("e"));