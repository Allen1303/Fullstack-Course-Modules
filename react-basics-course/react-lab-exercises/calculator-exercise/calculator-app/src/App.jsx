import { useState, useRef } from 'react'
import './App.css'
function App() {
  const inputRef = useRef(null)
  const resultRef = useRef(null)
  const [result, setResult] = useState(0)

  // Helper funtions
  const inputValue = () => Number(inputRef.current.value);

  const add = (e) => {
    e.preventDefault()
    setResult((result) => result + inputValue())
  }

  const subtract = (e) => {
    e.preventDefault()
    setResult((result) => result - inputValue())
  }

  const divide = (e) => {
    e.preventDefault()
    setResult((result) => result / inputValue())
  }

  const multiply = (e) => {
    e.preventDefault()
    setResult((result) => result * inputValue())
  }
  const resetInput = (e) => {
    e.preventDefault()
    inputRef.current.value = 0
  }

  const resetResult = (e) => {
    e.preventDefault()
    setResult(0)
  }
  return (
    <>
      <div className="app__container">
        <form>
          <p ref={resultRef}>Result:{result} </p>
          <input ref={inputRef} type="number" pattern="[ 0-9 ]" />
          <div className="button__container">
            <button className="math__btn" onClick={add}>+</button>
            <button className="math__btn" onClick={subtract}>−</button>
            <button className="math__btn" onClick={divide}>÷</button>
            <button className="math__btn" onClick={multiply}>×</button>
            <button className="reset__btn" onClick={resetInput}>Reset Inputs</button>
            <button className="reset__btn" onClick={resetResult}>Reset Result</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
