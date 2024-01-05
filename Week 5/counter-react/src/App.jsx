import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      title: 'task a',
      description: 'hello from task a',
      completed: false,
    },
    {
      title: 'task b',
      description: 'hello from task b',
      completed: false,
    },
    {
      title: 'task c',
      description: 'hello from task c',
      completed: false,
    },
  ]);

  function addTodo() {
    setTodos([...todos, { title: 'new todo title', description: 'new todo description' }]);
  }

  function DummyButton(){
    console.log("hi there")
    return <button>helo</button>
  }

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function (todo, index) {
        return <Todo key={index} title={todo.title} description={todo.description} />;
      })}
      <DarkNewTodos todos={todos}></DarkNewTodos>
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </div>
  );
}

function DarkNewTodos(props) {
  return (
    <div>
      {props.todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description} />;
      })}
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </div>
  );
}

export default App;
