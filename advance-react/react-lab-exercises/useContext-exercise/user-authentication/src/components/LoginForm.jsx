import { useUser } from "../hooks/useUser";
import { useState } from "react";
// Login form to grand entry to the app
export default function LoginForm() {
  //State management for name and email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // Bring the setUser function name from the useContext file
  const { setUser } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();
    //Handle edge case, return the form if the fields are empty
    if (!name || !email) return;
    setUser({ name, email });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
    >
      <fieldset>
        <div>
          <label htmlFor="user-name">Name:</label>
          <input
            className="w-full border border-slate-300 rounded-md p-2 text-sm"
            type="text"
            id="user-name"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="w-full border border-slate-300 rounded-md p-2 text-sm"
            type="email"
            id="email"
            placeholder="youremail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-sky-400 text-white rounded-md p-2 mt-4 hover:bg-sky-600 cursor-pointer"
          type="submit"
        >
          Sign in
        </button>
      </fieldset>
    </form>
  );
}
