import Footer from "~/components/footer";
import AboutFLC from "~/components/landing/aboutFLC";
import Benifits from "~/components/landing/benifits";
import Events from "~/components/landing/events";
import { FlagShip } from "~/components/landing/flagShip";
import Hero from "~/components/landing/hero";
import Projects from "~/components/landing/projects";
import Roadmap from "~/components/landing/roadmap";
import TechStack from "~/components/landing/techStack";

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
