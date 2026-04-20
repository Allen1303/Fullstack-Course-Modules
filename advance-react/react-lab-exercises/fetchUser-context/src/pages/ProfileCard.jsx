// Profile User Card component
import { useUser } from "../hooks/useUser";
export default function ProfileCard() {
  const { user } = useUser();
  return (
    <div className="w-96 bg-white rounded-2xl p-8 shadow-md flex flex-col items-center">
      <img
        src={`https://randomuser.me/api/portraits/men/${user?.id}.jpg`}
        alt={user?.name}
        className="w-28 h-28 rounded-full mb-4 ring-4 ring-indigo-100"
      />
      <div className="w-full text-center">
        <h3 className="text-xl font-semibold text-slate-800 mb-1">
          {/* ? returns undefine when user is null instead of crashing and ?? provides default fallback value*/}
          Name: {user?.name ?? "Guest"}{" "}
        </h3>
        <p className="text-sm text-indigo-500 mb-4">@{user?.username}</p>
        <hr className="w-full border-slate-100 mb-4" />

        <div className="w-full space-y-3">
          <p className="text-slate-500 text-sm">Email: {user?.email}</p>
          <p className="text-slate-500 text-sm">Website: {user?.website}</p>
          <p className="text-slate-500 text-sm">
            Company: {user?.company?.name}
          </p>
        </div>
      </div>
    </div>
  );
}
