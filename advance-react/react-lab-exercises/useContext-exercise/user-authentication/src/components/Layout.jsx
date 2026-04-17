import Navbar from "./Navbar";
import WelcomeBanner from "./WelcomeBanner";
import ProfileCard from "./ProfileCard";
// Layout of the App
export default function Layout() {
  return (
    <div>
      <header>
        <nav>
          {/* Navbar component here.*/}
          <Navbar />
        </nav>
      </header>
      <main>
        {/* WelcomeBanner component here.*/}
        <WelcomeBanner />
        {/* ProfileCard componenet here.*/}
        <ProfileCard />
      </main>
    </div>
  );
}
