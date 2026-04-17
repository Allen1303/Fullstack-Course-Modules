// Navabar Component
import { useUser } from "../hooks/useUser";
import { UserCheck } from "lucide-react";

export default function Navbar() {
  const { user, setUser } = useUser();
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        {/* Logo */}
        <UserCheck className="text-sky-400" />
        <h2 className="font-semibold text-slate-800">User 〉</h2>
      </div>
      <div className="flex items-center gap-4">
        {/* ( ? means ) if null, returns undefined instead of throwing an error */}
        <span className="text-slate-600 text-sm">{user?.name}</span>
        <button
          onClick={() => setUser(null)}
          className="bg-sky-400 text-white text-sm px-4 py-2 rounded-md hover:bg-sky-500"
        >
          Sign out
        </button>
      </div>
    </nav>
  );
}
