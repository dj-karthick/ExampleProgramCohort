const express = require('express');
const app = express();

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age;
    if(age > 18){
        next();
    }else{
        res.json({msg : "You age is not of the age."})
    }
}

app.get("/ride", isOldEnoughMiddleware, (req, res) => {
    res.json({msg : "you have successfully ride the ride."});
});

app.listen(3000);