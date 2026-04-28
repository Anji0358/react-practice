import List from "./Todo_List"
import Form from "./Todo_Form";
import { useState } from "react";

const Todo=()=>{
    const todosList=[
        {
            id:1,
            content:"店予約する"
        },
          {
            id:2,
            content:"卵買う"
        },
          {
            id:3,
            content:"郵便出す"
        }
    ];

    const deleteTodo=(id)=>{
        const newTodos=todos.filter((todo)=>{
            return todo.id!==id;
        })
        setTodos(newTodos);
    }

    const createTodo=(todo)=>{
        setTodos([...todos,todo]);

    }

    const [todos,setTodos]=useState(todosList);

    return(
        <>
        <List todos={todos} deleteTodo={deleteTodo}/>
        <Form createTodo={createTodo}/>
        </>

    )
};

export default Todo;