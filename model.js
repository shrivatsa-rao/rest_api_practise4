const mongoose=require("mongoose");

const Po= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model("Post",Po);