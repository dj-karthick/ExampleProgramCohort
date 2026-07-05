const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    return res.json({
        balance: account.balance
    })
})

router.post('/transfer', authMiddleware, async () => {          // Making transaction without using MondoDb Transaction.
    const { amount, to } = req.body;
    
    const account = await Account.findOne({
        userId: req.userId
    })

    if(account.balance < amount) return res.status(400).json({msg: "Insufficient balance"});

    const toAccount = await Account.findOne({
        userId: to
    })

    if(!toAccount) return res.status(400).json({msg: "Invalid Account"});

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        msg: "Transfer successful"
    })
    
    
})


module.exports = router;