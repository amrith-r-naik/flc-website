"use client"
import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

import Button from "~/components/Button";

import sampleImage from "~/assets/images/sample.jpg"

function Events() {

    const ref = useRef(null);
    useGSAP(() => {
        gsap.from('.event', {
            opacity: 0,
            y: 100,
            stagger: {
                grid: "auto",
                amount: .5,
            },
            scrollTrigger: {
                trigger: ref.current,
                toggleActions: "restart none none reverse",
            }
        });
    }, [])
    return (
        <section className="w-full content-container min-h-[80vh] flex flex-col gap-4 items-center mt-36 mb-16 bg-gradient-to-r from-blue-900 to-black" ref={ref}>
            <h1 className='text-4xl font-semibold text-center border border-yellow-700 rounded-r-full p-4'>Events & WorkShop</h1>
            <p>Enrich your skills and knowledge with tons of events and workshops</p>
            <div className="w-full h-full grid gap-4 grid-cols-1 md:grid-cols-3 iteam-center justify-between">
                <Image width={400} height={400} alt='flc' src={sampleImage} className="event" />
                <Image width={400} height={400} alt='flc' src={sampleImage} className="event" />
                <Image width={400} height={400} alt='flc' src={sampleImage} className="event" />
            </div>
            <Button className="mx-auto mb-6">
                View All
            </Button>
        </section>
    )
}

export default Events