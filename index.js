const express=require("express");

const app=express();



const Post=require("./model");

require("./data");

app.use(express.json());

app.post('/cust',async(req,res)=>{
    const user=new Post(req.body);

    try{
        const insert=await user.save();
        res.send(insert);
    }catch(e){
        res.send(e);
    }

});

app.get("/",async(req,res)=>{
    try{
        const posts=await Post.find();
        res.send(posts);

    }catch(e)
    {
        res.json({message:e});
    }
})


app.get('/:title',async(req,res)=>{
 // const title=req.params.id;
    // const post=Post.findOne(title);
    // res.send(post);
 // const mon=Post.find({ title: 'sushant'}, function (err, docs) {
    //     if (err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log("First function call : ", docs);
    //     }
    try{
    Post.findOne({des:'He is my heroine'},function (err, course) {
        res.json(course);
    });
}catch(e){

    console.log(e);
}});


app.patch('/:title',async(req,res)=>{
    try{
        const up=await Post.updateOne({title:req.params.title},{$set:{des:req.body.des}});
        res.send(up);
    }catch(e){
        res.send(e);
    }
})


app.listen(8000,()=>{
    console.log("hello world");
});