// Navigation component (Navbar)
import { useUser } from "../hooks/useUser"; // useUser helper function that holds the logic value for useContext
import { Atom } from "lucide-react";

export default function Navbar() {
  const { user, setUser } = useUser();
  return (
    <nav className="flex justify-between items-center px-6 py-0 bg-white shadow-md">
      <div className="flex items-center gap-2">
        {/*Logo*/}
        <Atom className=" text-indigo-600 w-8 h-8" />
        <h2 className="font-bold  text-2xl text-slate-800">NavBar</h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-indigo-800">{user?.name}</span>
        <button
          onClick={() => setUser(null)}
          className="text-sm text-slate-500 hover:text-indigo-600 hover:underline underline-offset-6 decoration-3 transition cursor-pointer"
        >
          Sign out
        </button>
        <img
          src={`https://randomuser.me/api/portraits/men/${user?.id}.jpg`}
          alt={user?.name}
          className="w-12 h-12 rounded-full mb-4 mt-4"
        />
      </div>
    </nav>
  );
}
