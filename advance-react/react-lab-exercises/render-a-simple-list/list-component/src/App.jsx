import './App.css'
import { DesertList } from "./DesertList"; // Named exports get wrapped in curly Braces {} 
import DESSERTS from "./dessert.js"
function App() {

  return (
    <>
      <div className="list__container">
        <h2>List of low Calorie Deserts</h2>
        <DesertList data={DESSERTS} />
      </div>
    </>
  )
}

export default App
