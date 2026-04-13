// Header Component
import { Atom } from "lucide-react";
import ToggleSwtich from "./ToggleSwitch";

function Header() {
  return (
    <div className="flex items-center gap-2">
      <Atom className="text-sky-400" />
      <h1 className="text-lg font-bold text-slate-800">
        What Is React <code className="text-sky-400">useContext</code> Hook?
      </h1>
      <ToggleSwtich />
    </div>
  );
}
export default Header;
