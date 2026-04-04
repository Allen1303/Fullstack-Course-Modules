import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const { randomNum, userInput } = result || {};
  const buttonStyle = {
    backgroundColor: "steelblue",
    color: "whitesmoke",
    padding: "10px 20px",
    width: "50%",
    borderRadius: "0.5rem",
    cursor: "pointer",
  };
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 5) + 1;
    // console.log(randomNum);
    let userInput = prompt("Take a guess");
    setResult({ randomNum, userInput });
  };
  return (
    <>
      <div>
        <h1>Event Handling With UseState</h1>
        <button onClick={handleClick} style={buttonStyle}>
          Guess a Number Between 1 And 5
        </button>
        {result && (
          <p>
            Computer: <strong>{randomNum}</strong>, Your Guess:{" "}
            <strong>{userInput}</strong>
          </p>
        )}
      </div>
    </>
  );
}

export default App;
