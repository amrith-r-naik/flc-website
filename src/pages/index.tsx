import Footer from "~/components/footer";
import AboutFLC from "~/components/landing/AboutFLC";
import Benifits from "~/components/landing/Benifits";
import Events from "~/components/landing/Events";
import { FlagShip } from "~/components/landing/FlagShip";
import Hero from "~/components/landing/Hero";
import Projects from "~/components/landing/Projects";
import Roadmap from "~/components/landing/Roadmap";
import TechStack from "~/components/landing/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch ">
      <Hero />
      <AboutFLC />
      <Roadmap />
      <FlagShip />
      <div className="bg-gradient-to-b from-black via-indigo-950 to-blue-950">
        <Projects />
      </div>
      <TechStack />
      <Events />
      <Benifits />
      <Footer />
    </main>
  );
}
