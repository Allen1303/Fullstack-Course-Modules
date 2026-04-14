// Toggle Switch Control Light Adn Dark Theme
import { useTheme } from "../hooks/useTheme"
function ToggleSwtich() {
  const { theme, setTheme } = useTheme()
  return (
    <label>
      <input type="checkbox" className="sr-only peer" onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
      <span className="block w-14 h-7 rounded-full bg-slate-300 peer-checked:bg-sky-400 relative before:content-[''] before:block before:w-[20px] before:h-[20px]
        before:rounded-full before:bg-white before:absolute before:top-[2px] before:left-[2px] before:transition-all peer-checked:before:translate-x-6">
      </span>
    </label>
  );
}
export default ToggleSwtich;
