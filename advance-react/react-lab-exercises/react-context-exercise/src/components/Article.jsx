// Article Component that contains both Header and Paragraph components
import Header from "./Header";
import ToggleSwitch from "./ToggleSwitch"
import Paragraph from "./Paragraph";
import { useTheme } from "../hooks/useTheme"

function Article() { // Add theme prop
  const { theme } = useTheme()
  return ( <article className={` relative shadow-lg w-175 h-75 rounded-md p-8 ${theme === "light" ? "bg-white" : "bg-slate-800"}`}>
      <Header />
      <div className="absolute top-4 right-8">
        <ToggleSwitch />
      </div>
      <Paragraph />
    </article>
  );
}
export default Article;
