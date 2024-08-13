import Footer from "~/components/Footer/Footer";
import AboutFLC from "~/components/landing/AboutFLC";
import Benifits from "~/components/landing/Benifits";
import Events from "~/components/landing/Events";
import Hackfest from "~/components/landing/Hackfest";
import Hero from "~/components/landing/Hero";
import Projects from "~/components/landing/Projects";
import Roadmap from "~/components/landing/Roadmap";
import TechStack from "~/components/landing/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch ">
      <video
        src="waves.webm"
        autoPlay
        muted
        loop
        className="absolute top-[30%] -z-10 w-full brightness-75"
      ></video>
      <Hero />
      <AboutFLC />
      <Roadmap />
      <Hackfest />
      <Projects />
      <div className="bg-gradient mt-12">
        <h1 className="heading p-4 text-center">
          Technology Stack Our Club Works With
        </h1>
        <TechStack />
      </div>
      <Events />
      <Benifits />
      <Footer />
    </main>
  );
}
