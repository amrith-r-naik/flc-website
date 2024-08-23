import { useTheme } from "next-themes";

import AboutFLC from "~/components/landing/aboutFLC";
import Benifits from "~/components/landing/benifits";
import Events from "~/components/landing/event";
import Hackfest from "~/components/landing/hackfest";
import Hero from "~/components/landing/hero";
import Projects from "~/components/landing/project";
import Roadmap from "~/components/landing/roadmap";
import { cn } from "~/lib/utils";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="flex flex-col ">
      <div className="min-h-screen w-full bg-gradient-to-t from-[#ffffff] via-[#efd17bc7] to-[#ffed951a] dark:bg-none" />
      <video
        src="waves.webm"
        autoPlay
        muted
        loop
        className={cn(
          "absolute top-[30rem] w-full md:top-[20rem] lg:top-[10rem] xl:top-32  2xl:top-24",
          theme === "dark" ? "brightness-100" : "brightness-75 ",
        )}
      />
      <Hero />

      <Events />
      <Benifits />
    </main>
  );
}
