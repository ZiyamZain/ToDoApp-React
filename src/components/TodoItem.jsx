import React from "react";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import './Todo.css'

const TodoItem = ({ todo, onComplete, onEdit, onDelete }) => {
  return (
    <li className="list-items">
      <div className={`list-item-list ${todo.status ? "completed" : ""}`}>
        {todo.list}
      </div>

      <span>
        <IoMdDoneAll
          className="list-item-icons"
          title="Complete"
          onClick={() => onComplete(todo.id)}
        />
        <FiEdit
          className="list-item-icons"
          title="Edit"
          onClick={() => onEdit(todo.id)}
        />
        <MdDelete
          className="list-item-icons"
          title="Delete"
          onClick={() => onDelete(todo.id)}
        />
      </span>
    </li>
  );
};

export default TodoItem;
