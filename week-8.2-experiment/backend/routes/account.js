import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { Account } from '../db.js';
import mongoose from 'mongoose';

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    return res.json({
        balance: account.balance
    })
})


router.post('/transfer', authMiddleware, async (req, res) => {          // Making transaction without using MondoDb Transaction.

    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;
    
    //Fetch the accounts within the transaction.
    const account = await Account.findOne({
        userId: req.userId
    }).session(session);

    if(!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Invalid Account"
        })
    }

    //Perform the transfer.
    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    }).session(session);

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    }).session(session);

    //Commit the transaction.
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    })
    
    
})


export default router;