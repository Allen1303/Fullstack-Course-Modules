import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { LogIn } from "lucide-react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { users, setUser, setError, isLoading, error } = useUser();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) return; //gaurd against empty submissions.
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailIsValid) return; // gaurd against invalid emal format.

    // Find matching users from fetch data
    const matchedUser = users.find(
      (user) => user.email.toLowerCase() === email.toLowerCase(),
    );

    matchedUser ? setUser(matchedUser) : setError("User not found");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm"
    >
      <fieldset className="space-y-4">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div>
          <label
            htmlFor="user-name"
            className="text-xs font-medium text-gray-500 uppercase tracking-wide"
          >
            Name:
          </label>
          <input
            type="text"
            id="user-name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xs font-medium text-gray-500 uppercase tracking-wide"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="youremail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-3.5 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className=" flex items-center justify-center gap-2 px-4 py-2 w-full h-11 bg-indigo-600 hover:bg-indigo-800 active:scale-[0.98] text-white text-sm font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <LogIn className="w-5 h-5" />
          Sign in
        </button>
      </fieldset>
    </form>
  );
}
