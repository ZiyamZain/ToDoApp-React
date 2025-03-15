import React from "react";

const TodoForm = ({ input, setInput, addTodo, editId, inputRef }) => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <input
        value={input}
        ref={inputRef}
        type="text"
        placeholder="Enter Your Todos"
        className="form-control"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>{editId ? "EDIT" : "ADD"}</button>
    </form>
  );
};

export default TodoForm;
