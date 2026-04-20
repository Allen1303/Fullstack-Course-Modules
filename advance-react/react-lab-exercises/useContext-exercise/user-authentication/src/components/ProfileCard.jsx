// Profile Card to display user info
import { useUser } from "../hooks/useUser";
import { CircleUserRound } from "lucide-react";

export default function ProfileCard() {
  const { user } = useUser();
  return (

    <div className="mx-6 mt-4 bg-white rounded-lg p-6 shadow-sm flex flex-col items-center">

      {/* mb-4 → margin bottom gives breathing room between icon and info */}
      <div className="mb-4">
        {/* Avatar*/}
        {/* text-sky-400 → accent color consistent with app theme */}
        {/* w-16 h-16   → fixed size makes the icon feel like a proper avatar */}
        <CircleUserRound className="text-sky-400 w-16 h-16" />
      </div>
      <div className="w-full text-center">
        <p className="font-semibold text-slate-800 text-lg">
          Name: {user?.name}
        </p>
        <hr className="my-3 border-slate-200" />
        <p className="text-slate-500 text-sm">Email: {user?.email}</p>
      </div>
    </div>
  );
}
