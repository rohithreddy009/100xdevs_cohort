import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    // Initialize WebSocket only once using the empty dependency array
    const newSocket = new WebSocket('ws://localhost:8080');

    newSocket.onopen = () => {
      console.log('Connection established');
    };

    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setLatestMessage(message.data);
    };

    // Clean up function to close the socket when the component unmounts
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  // Function to send message to WebSocket server
  const sendMessage = () => {
    if (socket) {
      console.log('Sending message:', inputMessage);
      socket.send(inputMessage);
      setInputMessage(""); // Clear input after sending
    }
  };

  // Function to handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    sendMessage();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        Latest message: {latestMessage}
      </div>
    </div>
  );
}

export default App;

// 😁 😁
