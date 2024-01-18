
// 1

// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import './App.css'

// function App() {
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function(response){
//         setTodos(response.data.todos)
//       })
//   },[])

//   return (
//     <>
//       {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function Todo(props){
//     return <div>
//       <h1>{props.title}</h1>
//       <h2>{props.description}</h2>
//     </div>
// }

// export default App

// 2

// import { useEffect, useState } from 'react';

// function App() {
//   const [selectedId, setSelectedId] = useState(1);

//   return (
//     <div>
//       <button onClick={() => setSelectedId(4)}>1</button>
//       <button onClick={() => setSelectedId(3)}>2</button>
//       <button onClick={() => setSelectedId(2)}>3</button>
//       <button onClick={() => setSelectedId(1)}>4</button>

//       <Todo vid={selectedId} />
//     </div>
//   );
// }

// function Todo(props) {
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     fetch("https://sum-server.100xdevs.com/todo?id=" + props.vid)
//       .then(async function(res) {
//         const json = await res.json();
//         setTodo(json.todo);
//       })
//       .catch(function(error) {
//         console.error('Error fetching TODO:', error);
//       });
//   }, [props.vid]);

//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h2>{todo.description}</h2>
//     </div>
//   );
// }

// export default App;
