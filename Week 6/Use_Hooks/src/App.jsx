import React, { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Calculate sum when inputValue changes
    let newSum = 0;
    for (let i = 1; i <= inputValue; i++) {
      newSum += i;
    }
    setSum(newSum);
  }, [inputValue]);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>

      <div>
        <label>
          Enter a value (n):
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(Number(e.target.value))}
          />
        </label>
      </div>

      <div>
        <h2>Sum from 1 to {inputValue}:</h2>
        <p>{sum}</p>
      </div>
    </div>
  );
}

export default App;
