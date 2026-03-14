const model = require("../models/postModel");

exports.getAll = (req,res) =>{
    console.log("welcome")
    res.json(model.getPosts());
};

exports.getOne = (req,res) =>{
    const post = model.getPost(req.params.id);
    if(!post) return res.status(404).send("post not found");
    res.json(post);
}
exports.create = (req,res) =>{
    const post = {id:Date.now(),...req.body};
     console.log("test1");
    model.createPost(post);
    res.status(201).json(post);
};
exports.update = (req,res) =>{
    model.updatePost(req.params.id,req,body);
    res.send("update");
};
exports.remove = (req,res) => {
    model.deletePost(req.params.id);
    res.send("deleted");
}