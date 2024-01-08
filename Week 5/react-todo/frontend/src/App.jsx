import { useState, useEffect } from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todos } from './components/Todos';
import { HeadersComponent } from './components/HeadersComponent';

import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("https://react-todo-backend-paov.onrender.com/todo");
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []); // Run only once on component mount

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
      <HeadersComponent />
    </div>
  );
}

export default App;