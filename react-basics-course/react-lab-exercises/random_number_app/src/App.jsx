import "./App.css";
import Card from "./Card";
const randomNum = () => Math.floor(Math.random() * 100 + 1);
function App() {
  return (
    <div>
      <h1>Task: Add 3 Card elements</h1>
      <Card num={randomNum()} />
      <Card num={randomNum()} />
      <Card num={randomNum()} />
    </div>
  );
}

export default App;
