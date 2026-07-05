const express = require('express');
const router = express.Router();
 
const {User, Account} = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { z } = require("zod");
const authMiddleware = require("../middleware/authMiddleware");

const SignUpSchema = z.object({
    userName: z
    .string()
    .email()
    .min(3, "Min 3 Chars")
    .max(30, "Max 20 Chars")
    .transform((val) => val.toLowerCase()),

    firstName: z
    .string()
    .max(30, "Max 20 Chars"),

    lastName: z
    .string()
    .max(30, "Max 20 Chars"),

    password: z
    .string()
    .min(3, "Min 3 Chars")
})

const SignInSchema = z.object({
    userName: z
    .string()
    .email()
    .min(3, "Min 3 Chars")
    .max(30, "Max 20 Chars")
    .transform((val) => val.toLowerCase()),

    password: z
    .string()
    .min(3, "Min 3 Chars")
})

const UpdateUserInfoSchema = z.object({
    firstName: z
    .string()
    .max(30, "Max 20 Chars")
    .optional(),

    lastName: z
    .string()
    .max(30, "Max 20 Chars")
    .optional(),

    password: z
    .string()
    .min(3, "Min 3 Chars")
    .optional()
})

router.post('/signUp', async (req, res) => {
    const userInfo = req.body;
    const isValid = SignUpSchema.safeParse(userInfo);

    if(!isValid.success)  return res.status(411).json({msg : "Email already taken /  Incorrect Inputs"});

    const userName = isValid.data.userName;
    const password = isValid.data.password;
    const firstName = isValid.data.firstName;
    const lastName = isValid.data.lastName;

    const user = await User.findOne({
        userName
    })

    if(!user._id){
        await User.create({
        userName,
        firstName,
        lastName,
        password
        })

        const userId = user._id;

        await Account.create({
            userId,
            balance: 1 + Math.random() * 1000
        })

        const token = jwt.sign({
            userId
        }, JWT_SECRET)

        res.status(200).json({
            msg: "User created successfully",
            token
        })
    }else{
        return res.status(411).json({msg: "User already exists"})
    }

})


router.post('signIn', async () => {
    const userInfo = req.body;
    const isValid = SignInSchema.safeParse(userInfo);

    if(!isValid.success)  return res.status(411).json({msg : "Incorrect username / Password"});

    const userName = isValid.data.userName;
    const password = isValid.data.password;

    const user = await User.findOne({
        userName
    })

    if(!user._id){
        return res.status(411).json({msg: "Unable to find user"})
    }
    
    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET)

    return res.status(200).json({
        token
    })

})

router.put('/', authMiddleware, async () => {
    const userInfo = req.body;
    const {success} = UpdateUserInfoSchema.safeParse(userInfo);
    if(!success) return res.status(404).json({msg: "Error while updating information"});

    await User.updateOne(userInfo, {
        id: req.userId
    })

    return res.status(200).json({
        msg: "Updated successfully"
    })
})

router.get('/bulk', async () => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        },{
            lastName: {
                "$regex": filter
            }
        }]
    })

    return res.status(200).json({
        user: users.map( user => ({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
            
        }))
    })
})

module.exports = router;