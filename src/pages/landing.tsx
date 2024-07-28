import TechStack from "~/components/landing/TechStack"
import Hero from "~/components/landing/Hero"
import Benifits from "~/components/landing/Benifits"
import Projects from "~/components/landing/Projects"
import Events from "~/components/landing/Events"
import Hackfest from "~/components/landing/Hackfest"
import AboutFLC from "~/components/landing/AboutFLC"
import Footer from "~/components/Footer/Footer"

export default function Home() {
  return (
    <main className="flex flex-col gap-20 items-stretch">
      <video src="line-waves.webm" autoPlay muted loop className="absolute top-[30%] w-full -z-10 brightness-75"></video>
      <Hero />
      <AboutFLC />
      <Hackfest />
      <Events />
      <TechStack />
      <Projects />
      <Benifits />
      <Footer />
    </main>
  )
}