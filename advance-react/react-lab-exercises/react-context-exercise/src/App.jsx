// Main App.jsx file is top of the tree, it has no parent to receive props from
// App is where state is created not received.
import Article from "./components/Article";
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  return (
    <>
      <ThemeProvider>
        <div className=" min-h-screen flex justify-center pt-8">
          <Article />
        </div>
      </ThemeProvider>

    </>
  );
}

export default App;
