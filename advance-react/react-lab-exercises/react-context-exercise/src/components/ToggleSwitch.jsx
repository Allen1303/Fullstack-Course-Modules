// Toggle Switch Control Light Adn Dark Theme
function ToggleSwtich() {
  return (
    <label>
      <input type="checkbox" className="sr-only peer" />
      <span className="block w-12 h-6 rounded-full bg-slate-300 peer-checked:bg-sky-400 relative before:content-[''] before:block before:w-[20px] before:h-[20px] before:rounded-full before:bg-white before:absolute before:top-[5px] before:left-[2px] before:transition-all peer-checked:before:translate-x-6"></span>
    </label>
  );
}
export default ToggleSwtich;
