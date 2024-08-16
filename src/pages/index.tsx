import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import Footer from "~/components/footer";
import AboutFLC from "~/components/landing/aboutFLC";
import Benifits from "~/components/landing/benifits";
import Events from "~/components/landing/event";
import Hackfest from "~/components/landing/hackfest";
import Hero from "~/components/landing/hero";
import Projects from "~/components/landing/project";
import Roadmap from "~/components/landing/roadmap";
import TechStack from "~/components/landing/techStack";

export default function Home() {
  const { theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="flex flex-col items-stretch">
      <div>
        {isClient && (
          <>
            {theme === "dark" && (
              <video
                src="waves.webm"
                autoPlay
                muted
                loop
                className="absolute top-[45%] -z-10 w-full dark:bg-black md:top-[22%]"
              ></video>
            )}
            {theme === "light" && (
              <video
                src="waves.webm"
                autoPlay
                muted
                loop
                className="absolute top-[45%]  -z-10 w-full bg-gradient-to-t from-transparent via-yellow-500 to-transparent brightness-75 md:top-[22%]"
              ></video>
            )}
          </>
        )}
      </div>
      <Hero />
      <div className="bg-gradient">
        <AboutFLC />
        <Roadmap />
      </div>
      <Hackfest />
      <div className="bg-gradient">
        <Projects />
        <div>
          <h1 className="subheading p-4 text-center">
            “ Technology Stack Our Club Works With ❞
          </h1>
          <TechStack />
        </div>
        <Events />
        <Benifits />
      </div>
      <Footer />
    </main>
  );
}
