import React from "react";
import { useState, useRef, useEffect } from "react";
import "./Todo.css";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const inputRef = useRef("null");
  const [editId , setEditId] = useState(0)


  useEffect(() => {
    inputRef.current.focus();
  });

  const addTodo = () => {

    if(input.trim()!==''){
         setTodos([...todos, { list: input, id: Date.now(), status: false }]);
         setInput("");
    }

    if(editId){
        const editTodo = todos.find((todo)=>todo.id === editId)
        const updateTodo = todos.map((todo) => todo.id===editTodo.id 
        ? (todo = {id : todo.id , list : input })
        : (todo = {id:todo.id, list:todo.list}))

        setTodos(updateTodo)
        setEditId(0)
        setInput('')

    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onDelete = (id) =>{

    const updatedTodos = todos.filter((todo)=>todo.id !== id)
    setTodos(updatedTodos)


  }

  const onComplete = (id) =>{

    const completedTodos = todos.map((todo)=>{
        if(todo.id === id){
            return({...todo , status : !todo.status})
        }
        return todo
    })

    setTodos(completedTodos)
  }

  const onEdit = (id) =>{

    const editTodo = todos.find((todo)=>(todo.id === id))
    setInput(editTodo.list)
    setEditId(editTodo.id)



  }

  return (
    <div className="container">
      <h2>TODO LIST</h2>

      <form className="form-group" onSubmit={handleSubmit}>
        <input
          value={input}
          ref={inputRef}
          type="text"
          placeholder="Enter Your Todos"
          className="form-control"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>{editId ? 'EDIT' : 'ADD'}</button>
      </form>

      <div className="list">
        <ul>
          {todos.map((todo) => (
            <li className="list-items">
              <div className="list-item-list" id={todo.status? 'list-item' : ''}>{todo.list}</div>

              <span>
                <IoMdDoneAll
                  className="list-item-icons"
                  id="complete"
                  title="Complete"
                  onClick={()=>(onComplete(todo.id))}
                />
                <FiEdit 
                    className="list-item-icons" 
                    id="edit"
                    title="Edit"
                    onClick={()=>(onEdit(todo.id))}/>
                <MdDelete
                  className="list-item-icons"
                  id="delete"
                  title="Delete"
                  onClick={()=>(onDelete(todo.id))}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
