import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onComplete, onEdit, onDelete }) => {
  return (
    <div className="list">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
