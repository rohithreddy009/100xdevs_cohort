import React from 'react';

import { useState } from 'react';
import Button from './components/Button';
import Todo from './components/Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([{
    title: "hello from title 1",
    description: "hello from description 1",
    completed:false
  },{
    title: "hello from title 2",
    description: "hello from description 2",
    completed:false
  },{
    title: "hello from title 3",
    description: "hello from description 3",
    completed:false
  }])

  

  return (
    <div>
      {/* <Todo title={todos[0].title} description={todos[1].description} />  
      <Todo title={todos[1].title} description={todos[1].description} />   */}
      
       {todos.map(function(props){
        return (<Todo title={props.title} description={props.description}></Todo>)
       })}
       <DummyButton></DummyButton>
      
    </div>
  );
}

function DummyButton(){
  console.log("re rendered dummy button")
  return <button>hey</button>
}

export default App;
