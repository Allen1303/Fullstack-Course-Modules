// Welcome Banner Simple component with some welcome text and user name
import { useUser } from "../hooks/useUser";
export default function WelcomeBanner() {
  const { user } = useUser();
  return (
    <header className=" w-150 mx-6 mt-6 bg-sky-50 rounded-lg p-6 shadow-sm flex items-center justify-center gap-1">
      <h2 className="text-2xl font-bold text-slate-800">Welcome Back!</h2>
      <p className="mt-1 text-slate-500">
        Good to see you,{" "}
        <span className="text-indigo-700 font-semibold">{user?.name}</span>
      </p>
    </header>
  );
}
