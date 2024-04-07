import revalidate from "./lib/actions";

export default async function Home() {
  const response = await fetch("https://sum-server.100xdevs.com/todos", {
    next: {
      tags: ['todos']
    }
  });
  const data = await response.json();
  revalidate()

  return (
    <div className="mt-4 ml-10 underline">
      {data.todos.map((todo: any) => (
        <div key={todo.id}> 
          <h2>{todo.title}</h2> 
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}
