"use client"
import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

import sampleImage from "~/assets/images/sample.jpg"

function Hackfest() {
    const ref = useRef(null)

    useGSAP(() => {
        gsap.fromTo(ref.current, {
            opacity: 0,
            scale: .5,
            duration: 3,
            ease: "power1.inOut",
        }, {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
                trigger: ref.current,
                toggleActions: "restart none none reverse"
            }
        });
    }, { scope: ref });

    return (
        <section className="w-full content-container grid grid-cols-1 md:grid-cols-2 justify-items-stretch gap-4 min-h-[80vh] rounded-3xl bg-gradient content-around border border-yellow-700" ref={ref}>
            <Image width={400} height={400} alt='flc' src={sampleImage} />
            <div className='space-y-4'>
                <h3 className='text-4xl font-semibold'>HackFest</h3>
                <p className='max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quisquam voluptates nostrum! Reprehenderit excepturi in possimus corporis aut! Deserunt soluta obcaecati culpa totam voluptatum natus hic distinctio voluptatibus dolore mollitia.</p>
            </div>
        </section>
    )
}


export default Hackfest;
