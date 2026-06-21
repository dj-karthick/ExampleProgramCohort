const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const { stringify } = require('querystring');
const path = require('path');
  
const app = express();
  
app.use(bodyParser.json());

const dataFilePath = path.join(__dirname,  'todo.json');

const loadTodos = () => {
    if(fs.existsSync(dataFilePath)){
        const data = fs.readFileSync(dataFilePath);
        return JSON.parse(data);
    }
    return [];
};

const saveTodos = (todos) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(todos, null, 2));
};

let todosListArray = loadTodos();


/*1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos*/
    
app.get("/todos", (req, res) => {
    console.log("retreive all todo")
    res.status(200).json(todosListArray);
});

/*2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123*/

app.get("/todos/:id", (req, res) => {
    console.log("Retreiving specific todo.")
    const id = req.params.id;
    let todoItem = todosListArray.find(todo => todo.id == id);
    if(todoItem){
        res.status(200).json(todoItem);
    }
    else{
        res.status(404).send("Todo not found.");
    }
});

/*3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }*/
    
app.post("/todos", (req, res) => {
    console.log("Post request.")
    const { title, description } = req.body;

    if(!title || !description){
        return res.status(400).send("Title and descrition are required.");
    }

    const newTodo = {
        "id" : todosListArray.length + 1, 
        "title" : title, 
        "description" :description
    };

    todosListArray.push(newTodo);
    saveTodos(todosListArray);
    res.status(201).json({"id" : newTodo.id});
});

/*4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }*/
 
app.put("/todos/:id", (req, res)=>{
    console.log("Put request for changing existing todo.")
    const id = req.params.id;
    const { title, description } = req.body;

    if(!title || !description){
        return res.status(400).send("Title and descrition are required.");
    }

    let todoItem = todosListArray.find(todo => todo.id == id);
    if(!todoItem){
        return res.status(404).send("Todo not found.");
    }

    todoItem.title = title;
    todoItem.description = description;
    saveTodos(todosListArray);

    return res.status(200).send("Item was found and updated.");

});  

/*5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123*/

app.delete("/todos/:id", (req, res) => {
    console.log("Delete request.")
    const id = parseInt(req.params.id);
    const todoIndex = todosListArray.findIndex( todoItem => todoItem.id == id);
    
    if(todoIndex !== -1){
        todosListArray.splice(todoIndex, 1);
        saveTodos(todosListArray);
        return res.status(200).send(`Todo with id: ${id} deleted.`);
    }
    else{
        return res.status(404).send("Todo not found.")
    }
});



app.listen(3001);

