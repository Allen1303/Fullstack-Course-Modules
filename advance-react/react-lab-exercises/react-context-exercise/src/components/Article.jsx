// Article Component that contains both Header and Paragraph components
import Header from "./Header";
import Paragraph from "./Paragraph";

function Article() {
  return (
    <article className=" shadow-md w-135 h-55 rounded-md p-4">
      <Header />
      <Paragraph />
    </article>
  );
}
export default Article;
