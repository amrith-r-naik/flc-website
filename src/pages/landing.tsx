import NewNavBar from "~/components/navbar/NewNavBar";
import Hero from "~/components/Hero/Hero";
import Footer from "~/components/Footer/Footer";
import DiaryContainer from "~/components/Diary/DiaryContainer";
import Image from "next/image";
import sampleImage from "~/assets/icons/python.svg"
import Wave from "~/components/Wave/Wave";


const benifits = [
  {
    "icon": sampleImage,
    "title": "Workshops",
    "content": "The members get free access to all the events and workshops conducted by the Finite Loop club."
  },
  {
    "icon": sampleImage,
    "title": "Internships",
    "content": "Get a chance to grab internships and put your skills into use."
  },
  {
    "icon": sampleImage,
    "title": "Peer to Peer Learning",
    "content": "Explain your ideas to others and participate in activities through which you can learn from your peers."
  },
  {
    "icon": sampleImage,
    "title": "Guest Lecture",
    "content": "Get an opportunity to listen to some of the renowned experts, and engage in discussions."
  },
  {
    "icon": sampleImage,
    "title": "Real-Time Projects",
    "content": "Being in this club, you get to work on real time projects, which allows you to bring out your creative side."
  },
  {
    "icon": sampleImage,
    "title": "Coding Contest",
    "content": "We ensure to conduct biweekly coding contests, to improve your analytical and problem solving skills."
  }
]

export default function Home() {

  return (
    <main>
      <NewNavBar />
      <Hero />
      <DiaryContainer />
      <section className="w-full h-screen">
        <div className="content-container h-full flex gap-4 flex-col">
          <h3 className='subheading'>/ Why to join us</h3>
          <hr className='mb-8' />

          <div className="grid grid-cols-3 grid-flow-row border-y border-foreground flex-grow ">
            {
              benifits.map((benifit) => (
                <div className=" border-foreground border-x border-b p-4 flex flex-col gap-2" key={benifit.title}>
                  <Image width={100} height={100} src={benifit.icon} alt="icon" />
                  <strong className="text-lg font-semibold">{benifit.title}</strong>
                  <p className="text-sm">{benifit.content}</p>
                </div>
              ))
            }
          </div>
          <hr className='mt-8'/>
            <div className="w-full text-justify">01100110 01101001 01101110 01101001 01110100 01100101 01101100 01101111 01101111 01110000
              {/* https://stackoverflow.com/a/22950810/20365439 */}
              <span className="inline-block w-full h-1"> </span>
              </div>
        </div>
      </section>
      {/* <Footer /> */}

      <Wave/>
    </main>
  );
}