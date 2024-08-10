import Image from "next/image";

import sampleImage from "~/assets/images/sample.jpg";

function AboutFLC() {
  return (
    <section className="content-container   bg-gradient-to-b from-black via-blue-950 to-purple-950-950 ">
      <div className="mb-12  border border-yellow-700 md:rounded-md  rounded-b-full p-4 ">

        <h1 className="heading text-center justify-center items-center  ">
          FINITELOOP: The Best Coding Club of NMAMIT
        </h1>
      </div>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2   ">
        <div className="space-y-6">
          <p className="max-w-lg text-gray-200">
            Finite Loop is a Coding Club that aims to provide a comprehensive
            perspective on development and encourages students to realize their
            ideas. We promote participation in competitive programming and
            strive to inspire the next generation.
          </p>

          <ul className="list-disc space-y-3 pl-5 text-gray-300">
            <li>We stay curious and seek out new solutions.</li>
            <li>We work relentlessly to produce fruitful results.</li>
            <li>
              We support each other to grow with a positive spirit and embrace
              our diversities.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <Image
            width={400}
            height={400}
            alt="Finite Loop Club"
            src={sampleImage}
            className="md:rounded-r-full rounded-b-full shadow-lg"
          />
        </div>
      </div>
    </section>
   

  );
}

export default AboutFLC;

