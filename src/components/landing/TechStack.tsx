"use client"
import Image from "next/image";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import { useRef } from "react";

import pythonIcon from "~/assets/icons/python.svg"

const techs = [
    {
        name: "python",
        icon: pythonIcon
    },
    {
        name: "javascript",
        icon: pythonIcon
    },
    {
        name: "react",
        icon: pythonIcon
    },
    {
        name: "nextjs",
        icon: pythonIcon
    }, {
        name: "svelte",
        icon: pythonIcon
    }, {
        name: "1",
        icon: pythonIcon
    }, {
        name: "2",
        icon: pythonIcon
    }, {
        name: "3",
        icon: pythonIcon
    }, {
        name: "4",
        icon: pythonIcon
    }, {
        name: "5",
        icon: pythonIcon
    }
]

export default function TechStack() {
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
        const width = ref.current?.offsetWidth ?? 0;
        const height = ref.current?.offsetHeight ?? 0;

        gsap.to(".tech", {
            x: (i) => {
                return `${width * .4 * Math.sin(2 * Math.PI * i / techs.length)}`
            },
            y: (i) => `${height * .4 * Math.cos(2 * Math.PI * i / techs.length)}`,
            opacity: 1,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ref.current,
                toggleActions: "restart none none reverse"
            },
            stagger: {
                amount: 1,
                from: "random"
            }
        })
    }, { scope: ref })

    return (
        <section className="w-full content-container  min-h-[80vh] rounded-3xl bg-gradient border border-yellow-700 grid place-content-center relative" ref={ref}>
            <div className="max-w-md p-4 bg-white/10 rounded-lg">
                <h3 className='text-4xl font-semibold text-center'>
                    Work on new Trending Tech Stack
                </h3>

                <p className=' text-gray-500 text-center mx-auto'>Get a chance to explore and innovate using the in-demand Tech Stack! Get your hands to code your idea and enter the world of developers!</p>

            </div>

            {techs.map(tech => {
                return (
                    <div className="w-12 h-12 tech absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full p-2 bg-white/30 origin-center opacity-0">
                        <Image width={100} height={100} alt='flc' src={tech.icon} className="w-full object-fill aspect-square" />
                    </div>
                )
            })}
        </section>
    )
}