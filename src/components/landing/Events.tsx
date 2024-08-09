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
        <section className="w-full content-container min-h-[80vh] flex flex-col gap-4 items-center" ref={ref}>
            <h3 className='text-4xl font-semibold text-center'>Events & WorkShop</h3>
            <p>Enrich your skills and knowledge with tons of events and workshops</p>
            <div className='w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow justify-between items-center place-items-center'>
                <Image width={400} height={400} alt='flc' src={sampleImage} className="event rounded" />
                <Image width={400} height={400} alt='flc' src={sampleImage} className="event rounded" />
                <Image width={400} height={400} alt='flc' src={sampleImage} className="event rounded" />
            </div>
            <Button className="mx-auto">
                View All
            </Button>
        </section>
    )
}

export default Events