const mongoose = require('mongoose');
const { boolean, string } = require('zod');

mongoose.connect('mongodb+srv://karthickallancherry_db_user:d8aY2YFKrs4ZTfOf@cluster0.1zbae1o.mongodb.net/new-year-todo');

const todoSchema = mongoose.Schema({
    title : string,
    description : string,
    completed : boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}