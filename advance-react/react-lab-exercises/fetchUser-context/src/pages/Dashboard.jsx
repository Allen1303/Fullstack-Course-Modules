// Dashboard component is the Page Wrapper
import Navbar from "../components/Navbar";
import WelcomeBanner from "./WelcomeBanner";
import ProfileCard from "./ProfileCard";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="w-screen mx-auto px-4 pt-8 flex flex-col items-center gap-6">
        {/* Navbar*/}
        {/*WelcomeBanner*/}
        <WelcomeBanner />

        {/*ProfileCard*/}
        <ProfileCard />
      </div>
    </div>
  );
}
