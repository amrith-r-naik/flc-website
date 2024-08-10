
import Footer from "~/components/Footer/Footer";
import Benifits from "~/components/landing/Benifits";
import { FlagShip } from "~/components/landing/FlagShip";
import Hero from "~/components/landing/Hero";
import Projects from "~/components/landing/Projects";
import ScrollLeftSection from "~/components/landing/ScrollLeftSection";
import ScrollRightSection from "~/components/landing/ScrollRightSection";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch gap-10">
      <Hero />
      <ScrollRightSection />
      <FlagShip />
      <div className="bg-gradient-to-b from-black via-indigo-950 to-blue-950">
        <Projects />
      </div>
      <ScrollLeftSection />
      <Benifits />
      <Footer />
    </main>
  );
}