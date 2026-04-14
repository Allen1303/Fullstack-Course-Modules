// Paragraph Component
import { useTheme } from "../hooks/useTheme"
function Paragraph() {
  const { theme } = useTheme()
  return (
    <p className={`${theme === "light" ? "text-slate-700" : "text-slate-300"} text-lg pt-1 mt-3`}>
      Usually, you will pass information from a parent component to a child
      component via props. But passing props can become verbose and inconvenient
      if you have to pass them through many components in the middle, or if many
      components in your app need the same information.{" "}
      <code className="text-sky-400">Context</code> lets the parent component
      make some information available to any component in the tree below it—no
      matter how deep—without passing it explicitly through props.
    </p>
  );
}
export default Paragraph;
