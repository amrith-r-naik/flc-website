import Footer from "~/components/footer/Footer";
import AboutFLC from "~/components/landing/AboutFLC";
import Benifits from "~/components/landing/Benifits";
import Events from "~/components/landing/Events";
import Hackfest from "~/components/landing/Hackfest";
import Hero from "~/components/landing/Hero";
import Projects from "~/components/landing/Projects";
import TechStack from "~/components/landing/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch gap-20">
      <video
        src="waves.webm"
        autoPlay
        muted
        loop
        className="absolute top-[30%] -z-10 w-full brightness-75 "
      ></video>
      <Hero />
      <AboutFLC />
      <Hackfest />
      <Events />
      <TechStack />
      <Projects />
      <Benifits />
      <Footer />
    </main>
  );
}
