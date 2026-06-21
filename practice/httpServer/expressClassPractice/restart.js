const express = require('express');

const app = express();

const port = 3000;

app.get("/", function(req, res){
    res.send("Hi I am karthick");
});

app.listen(port, ()=>{
    console.log("port listening on 3000.")
});
