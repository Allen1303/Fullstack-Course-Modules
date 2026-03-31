import { useState } from "react";
import HomePage from "./HomePage";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);
  return (
    <>
      {loggedIn ? (
        <div>
          <HomePage /> <LogoutButton logout={logout} />{" "}
        </div>
      ) : (
        <div>
          <LoginButton login={login} />
        </div>
      )}
    </>
  );
}

export default App;
