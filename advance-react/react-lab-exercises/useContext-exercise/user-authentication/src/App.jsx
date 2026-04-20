import { useUser } from "./hooks/useUser";
import { UserProvider } from "./context/UserContext";
import LoginForm from "./components/LoginForm";
import Layout from "./components/Layout";

//Helper function to render the Page layout or display the Login Form
function PageDisplay() {
  const { user } = useUser();
  return user ? <Layout /> : <LoginForm />;
}
// Main App display function()
function App() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <UserProvider>
          <PageDisplay />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
