"use client"
import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg"

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


function Benifits() {

    const ref = useRef(null)

    useGSAP(() => {
        gsap.from(ref.current, {
            opacity: 0,
            scale: .5,
            duration: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ref.current,
                toggleActions: "restart none none reverse"
            }
        });

        gsap.from('.benifit', {
            opacity: 0,
            y: 100,
            stagger: {
                grid: "auto",
                amount: 1
            },
            scrollTrigger: {
                trigger: ref.current,
                toggleActions: "restart none none reverse"
            }
        });

    }, { scope: ref });

    return (
        <section className="w-full content-container space-y-8 min-h-[80vh]" ref={ref}>
            <h3 className='text-4xl font-semibold text-center'>Why To join us</h3>

            <div className="grid grid-cols-3 grid-flow-row gap-4">
                {
                    benifits.map((benifit) => (
                        <div className="rounded-lg bg-gradient border border-yellow-700 p-4 space-y-4 benifit" key={benifit.title}>
                            <Image width={50} height={50} src={benifit.icon} alt="icon" />
                            <strong className="text-lg font-semibold">{benifit.title}</strong>
                            <p className="text-sm">{benifit.content}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Benifits