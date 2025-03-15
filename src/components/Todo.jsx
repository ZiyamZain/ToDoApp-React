import React, { useState, useRef, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [input]);

  const addTodo = () => {
    if (input.trim() !== "") {
      if (editId) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === editId ? { ...todo, list: input } : todo
          )
        );
        setEditId(0);
      } else {
        setTodos([...todos, { list: input, id: Date.now(), status: false }]);
      }
      setInput("");
    }
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const onEdit = (id) => {
    const editTodo = todos.find((todo) => todo.id === id);
    setInput(editTodo.list);
    setEditId(editTodo.id);
  };

  return (
    <div className="container">
      <h2>TODO LIST</h2>
      <TodoForm
        input={input}
        setInput={setInput}
        addTodo={addTodo}
        editId={editId}
        inputRef={inputRef}
      />
      <TodoList
        todos={todos}
        onComplete={onComplete}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TodoApp;
