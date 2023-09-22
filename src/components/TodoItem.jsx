import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, deleteTodo, editTodo }) {
  const [isEditing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            name="todo"
            autoComplete="off"
            onChange={(e) => setNewText(e.target.value)}
          />
          <button type="submit" title="Save" onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span>{todo.text}</span>
          <button type="submit" title="Edit" onClick={() => setEditing(true)}>Edit</button>
          <button type="submit" title="Delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      )}
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
};

export default TodoItem;
