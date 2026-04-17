// Welcome Banner containing Welcome text
import { useUser } from "../hooks/useUser";

export default function WelcomeBanner() {
  const { user } = useUser();
  return (
    <div className="mx-6 mt-6 bg-sky-50 rounded-lg p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-800">Welcome Back!</h2>
      <p className="mt-1 text-slate-500">
        <span className="text-sky-400 font-semibold">{user?.name}</span> Good to
        see you.
      </p>
    </div>
  );
}
