import TechStack from "~/components/landing/TechStack"
import Hero from "~/components/landing/Hero"
import Benifits from "~/components/landing/Benifits"
import Projects from "~/components/landing/Projects"
import Events from "~/components/landing/Events"
import Hackfest from "~/components/landing/Hackfest"
import AboutFLC from "~/components/landing/AboutFLC"
import Footer from "~/components/footer/Footer"

export default function Home() {
  return (
    <>
      <video src="line-waves.webm" autoPlay muted loop className="absolute top-[30%] w-full -z-10 brightness-75"></video>
      <main className="flex flex-col gap-20 items-stretch p-4">
        <Hero />
        <AboutFLC />
        <Hackfest />
        <Events />
        <TechStack />
        <Projects />
        <Benifits />
      </main>
      <Footer />
    </>
  )
}