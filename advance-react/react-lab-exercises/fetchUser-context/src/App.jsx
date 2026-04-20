import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashboard";
import { UserProvider } from "./context/UserContext";
import { useUser } from "./hooks/useUser.js";
import { Loader } from "lucide-react";
// Helper function to allow load icon to be styled and centered correctly
function LoadingIcon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Loader className="w-8 h-8 text-indigo-600 animate-spin" />
    </div>
  );
}

// Helper function for deciding what page to display
function PageDisplay() {
  // destructure the user variable set the value to helper useUser function
  const { user, isLoading } = useUser();
  if (isLoading) return <LoadingIcon />;
  return user ? (
    <Dashboard />
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      {/*UseProvider component wrapps all consumer components of the context*/}
      <UserProvider>
        <PageDisplay />
      </UserProvider>
    </div>
  );
}
export default App;
