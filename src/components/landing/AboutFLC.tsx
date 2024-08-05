import Image from "next/image";

import sampleImage from "~/assets/images/sample.jpg"

function AboutFLC() {
    return (
        <section className="w-full content-container min-h-[80vh] mt-10 md:mt-80">
            <h3 className='subheading text-center mb-12'>FINITELOOP The best Coding Club of NMAMIT</h3>
            <div className=' w-full h-full grid grid-cols-1 md:grid-cols-2 flex-grow items-center justify-items-end gap-4'>
                <div className="space-y-4">
                    <p className='max-w-lg'>Finite Loop is a Coding Club, which aims to give a good perspective of development, and encourages students to realize their ideas. We encourage students to participate in competitive programming and thus, inspire the next.</p>
                    <ul className="space-y-2 text-gray-500">
                        <li><span>We stay curious, and seek out new solutions.</span></li>
                        <li><span>We work relentlessly to produce fruitful results.</span></li>
                        <li><span>We support each other to grow, with a positive spirit, and embrace our diversities.</span></li>
                    </ul>
                </div>

                <Image width={400} height={400} alt='flc' src={sampleImage} className="rounded"/>
            </div>
        </section>
    )
}

export default AboutFLC