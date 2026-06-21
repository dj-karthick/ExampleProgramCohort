const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://karthickallancherry_db_user:d8aY2YFKrs4ZTfOf@cluster0.1zbae1o.mongodb.net/users?retryWrites=true&w=majority');

const User = mongoose.model('Users', {name : string, email : string, password : string });

app.post("/signup", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email : username});

    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name : name,
        email : username,
        password : password,
    });

    user.save();

    res.json({
        "msg" : "User Created Successfully"
    });
})