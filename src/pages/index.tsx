import Footer from "~/components/footer";
import AboutFLC from "~/components/landing/aboutFLC";
import Benifits from "~/components/landing/benifits";
import Events from "~/components/landing/events";
import Hackfest from "~/components/landing/hackfest";
import Hero from "~/components/landing/hero";
import Projects from "~/components/landing/projects";
import Roadmap from "~/components/landing/roadmap";
import TechStack from "~/components/landing/techStack";


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
      <div className="mt-12 bg-gradient">
        <h1 className="heading text-center p-4">
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
