import { useState } from "react";

export function CreateTodo(props){
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    return <div>
        <input style={{
            margin : 10,
            padding : 10
        }} type="text" placeholder="Title" onChange={(e)=>{
            const value = e.target.value;
            setTitle(value);
        }}/> <br />

        <input style={{
            margin : 10,
            padding : 10
        }} type="text" placeholder="Description" onChange={(e)=>{
            const value = e.target.value;
            setDescription(value);
        }} /> <br />

        <button style={{
            margin : 10,
            padding : 10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method : "post",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "content-type" : "application/json"
                }
            }).then(async function(res){
                const json = res.json();
                alert("Todo Added");
            })
        }}>Add a Todo</button>
    </div>
}