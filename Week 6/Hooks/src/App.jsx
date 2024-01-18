import { useEffect, useState } from "react"

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
    },1000)
  }, [])

  return (
    <div>
      {/* {todos.map(({title, description}) => <Todo title={title} description={description} />)} */}
      {todos.map(function({title,description}){
        return(
          <Todo title={title} description={description}></Todo>
        )
      })}
    </div>
  )
}

function Todo(props) {
  return <div>
    <h2>
      {props.title}
    </h2>
    <h5>
      {props.description}
    </h5>
  </div>
}

export default App

