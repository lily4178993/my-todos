import React, { useState, useEffect } from 'react';
import { TodoForm, TodoList } from './components';

function App() {
  // Load todos from local storage on component mount
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    // Save todos to local storage whenever todos change
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id, updatedText) => {
    const updatedTodos = todos.map((todo) => (todo.id === id
      ? { ...todo, text: updatedText }
      : todo));
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>My todos</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </>
  );
}

export default App;
