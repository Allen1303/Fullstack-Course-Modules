// Header Component
import { Atom } from "lucide-react";
import { useTheme } from "../hooks/useTheme"

function Header() {
  const { theme } = useTheme()
  return (
    <div className="flex items-center gap-2">
      <Atom className="text-sky-400" />
      <h1 className={`text-lg font-bold ${theme === "light" ? "text-slate-800" : "text-slate-300"} `}>

        What Is React <code className="text-sky-400">useContext</code> Hook?
      </h1>
    </div>
  );
}
export default Header;
