const router = require('express').Router();
const Post = require("../model/post");

router.get('/ping', (req, res)=>{
    res.send({Response:"pong"});
});

router.post("/pong", (req, res)=>{
    const request = req.body;
    if (request.ping) {
        res.json(request);   
    } else {
        res.status(400).json({Error:"Not allowed"});
    }
});

router.post("/input", async(req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    console.log(req.body);

    // const newPost = new Post({
    //     title : "hmmmm",
    //     description : "apa nihh"
    // });
    const newPost = new Post({
        title : title,
        description : description
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
});

router.get("/posts", async(req, res)=>{
    const posts = await Post.find({});
    res.json(posts);
});

router.patch("/editPost:postid", async(req, res)=>{
    const _id = req.params.postid;
    const update = await Post.findByIdAndUpdate(_id, {$set:{description:req.body.description}});
    res.json(update);
});

module.exports = router;