const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.get('/', (req,res)=>{
    res.send('Server is up and running');
});

app.listen(3000, ()=>{
    console.log("server is uppp");
});

mongoose.connect("mongodb://localhost:27020/studytest")
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));