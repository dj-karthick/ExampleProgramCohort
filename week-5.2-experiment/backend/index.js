const express = require('express');
const { createTodoSchema, updateTodoSchema } = require('./type.js');
const { todo } = require('./db.js');
const cors = require('cors'); 
const app = express();

app.use(cors()); 
app.use(express.json());

app.post('/todos',async (req, res)=>{
    const createPayload = req.body;
    const parsePayload = createTodoSchema.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(400).json({
            msg : 'You have sent the wrong inputs'
        })
    }
    
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })

    res.json({
        msg : "You have created the todo"
    })
})

app.get('/todos',async (req, res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })

})

app.put('/completed', async (req, res)=>{
    const updatePayload = req.body;
    const parsePayload = updateTodoSchema.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(400).json({
            msg : 'You have sent the wrong inputs'
        })
    }

    await todo.findOneAndUpdate({
        _id : updatePayload.id
    }, {
        completed : true
    })

    res.json({
        msg : 'Todo Marked as completed'
    })
})

app.listen(3000);