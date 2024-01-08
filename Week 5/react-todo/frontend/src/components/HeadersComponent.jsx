// HeadersComponent.jsx
import React, { useState, useEffect } from 'react';

export function HeadersComponent() {
  const [headers, setHeaders] = useState({});
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch headers
        const responseHeaders = await fetch('https://react-todo-backend-paov.onrender.com');
        const headersObject = {};
        responseHeaders.headers.forEach((value, name) => {
          headersObject[name] = value;
        });
        setHeaders(headersObject);

        // Fetch todos
        const responseTodos = await fetch('https://react-todo-backend-paov.onrender.com/todo');
        const todosData = await responseTodos.json();
        setTodos(todosData.todos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  return (
    <div>
      <h1>Response Headers</h1>
      <ul>
        {Object.entries(headers).map(([name, value]) => (
          <li key={name}>
            <strong>{name}:</strong> {value}
          </li>
        ))}
      </ul>

      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}