// // App.js
// import React, { useState } from 'react';
// import Todo from './components/Todo';

// const initialTodos = [
//   { title: 'Todo 1', description: 'Description for Todo 1' },
//   { title: 'Todo 2', description: 'Description for Todo 2' },
//   { title: 'Todo 3', description: 'Description for Todo 3' },
// ];


// function App() {

//   function addTodo(){
//     const newTodo = {
//       title: "hello " + Math.random(),
//       description: "hello " + Math.random(),
//     };
//     setTodos([...todos, newTodo]);
//   }
  
//   const [todos, setTodos] = useState(initialTodos);

//   return (
//     <div>
//       <button
//         onClick={addTodo}
//       >
//         Add New Todo
//       </button>

//       {todos.map(function (todo, index) {
//         return (
//           <Todo key={index} title={todo.title} description={todo.description} />
//         );
//       })}
//     </div>
//   );
// }

// export default App;


// function App(){
//     return(
//       <>
//         <CardWrapper>
//           hi there
//         </CardWrapper>
//         <CardWrapper>
//           <FakeComponent />
//         </CardWrapper>
//         <CardWrapper>
//           <CardWrapper>
//             <CardWrapper>
//               <FakeComponent />
//             </CardWrapper>
//           </CardWrapper>
//         </CardWrapper>
//       </>
//     )
//   }
  
//   function CardWrapper({children}){
//     console.log(children)
//     return(
//       <div style={{border:"2px solid black",padding:20, marging:20}}>
//         {children}
//       </div>
//     )
//   }
  
//   function FakeComponent(){
//     return <div>
//       hi there from fake component
//     </div>
//   }
  
//   export default App