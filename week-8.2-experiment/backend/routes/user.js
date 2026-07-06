import express from "express";
const router = express.Router();
 
import { User, Account } from '../db.js';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config.js";
import z from "zod";
import authMiddleware from "../middleware/authMiddleware.js";

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

    const { success } = SignUpSchema.safeParse(req.body);

    if(!success)  return res.status(411).json({msg : "Email already taken /  Incorrect Inputs"});

    const existingUser = await User.findOne({
        userName: req.body.userName
    })

    if(existingUser){
        return res.json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
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

})


router.post('/signIn', async (req, res) => {
    
    const { success } = SignInSchema.safeParse(req.body);

    if(!success )  return res.status(411).json({msg : "Incorrect username / Password"});

    const user = await User.findOne({
        userName: req.body.userName,
        password: req.body.password
    })

    if(!user){
        return res.status(411).json({msg: "Unable to find user"})
    }
    
    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET)

    return res.status(200).json({
        token
    })

})

router.put('/', authMiddleware, async (req, res) => {

    const {success} = UpdateUserInfoSchema.safeParse(req.body);
    if(!success) return res.status(404).json({msg: "Error while updating information"});

    const updatedUser = await User.updateOne(
        { _id: req.userId },
        { $set: req.body }
    )

    if(updatedUser.matchedCount == 0) return res.status(404).json({message: "User not found"});

    return res.status(200).json({
        message: "Updated successfully"
    })
})

router.get('/bulk', async (req, res) => {
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

export default router;
