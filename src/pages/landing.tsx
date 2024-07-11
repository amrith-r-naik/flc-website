import NewNavBar from "~/components/navbar/NewNavBar";
import Hero from "~/components/Hero/Hero";
import Footer from "~/components/Footer/Footer";
import DiaryConatiner from "~/components/Diary/DiaryConatiner";

export default function Home() {

  return (
    <main>
        <NewNavBar />
        <Hero />
        <DiaryConatiner/>
        <Footer />
      </main>
  );
}