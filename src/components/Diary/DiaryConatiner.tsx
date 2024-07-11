"use client"
import React, { useEffect, useRef } from 'react'
import "./style.module.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import Marquee from "react-fast-marquee";

import pythonIcon from "~/assets/icons/python.svg"
import sampleImage from "~/assets/images/sample.jpg"

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
		name: "astro",
		icon: pythonIcon
	}
]


// gsap.registerPlugin(ScrollTrigger)

// function DiaryConatiner() {
// 	const containerRef = useRef<HTMLDivElement>(null)
// 	useGSAP(
// 		() => {
// 			let sections = gsap.utils.toArray(".page");
// 			containerRef.current!.style.width = `${sections.length * 100}%`
// 			let scrollTween = gsap.to(sections, {
// 				xPercent: -100 * (2),
// 				ease: "none", // <-- IMPORTANT!
// 				scrollTrigger: {
// 					trigger: containerRef.current,
// 					pin: true,
// 					scrub: 0.1,
// 					// snap: directionalSnap(1 / (sections.length - 1)),
// 				}
// 			})

// 		}, { scope: containerRef }
// 	);

// 	return (
// 		<>

// 			<div className='w-full h-full overflow-x-hidden'>
// 				<div className='h-screen flex flex-nowrap overflow-y-hidden' ref={containerRef}>
// 					<section className='page w-full h-screen mt-8'>
// 						<div className='content-container align-middle'>
// 							<h3 className='subheading'>/ About Us</h3>

// 							<div className=' w-full h-full grid grid-cols-1 md:grid-cols-2 place-items-center'>
// 								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quisquam voluptates nostrum! Reprehenderit excepturi in possimus corporis aut! Deserunt soluta obcaecati culpa totam voluptatum natus hic distinctio voluptatibus dolore mollitia.</p>

// 								<Image width={400} height={400} alt='flc' src={sampleImage} />
// 							</div>
// 						</div>
// 					</section>
// 					<section className=' page w-full h-screen '>
// 					<div className='content-container my-8'>
// 							<h3 className='subheading'>/ HackFest</h3>

// 							<div className=' w-full h-full flex flex-col justify-evenly items-center'>
// 								<Image width={400} height={400} alt='flc' src={sampleImage} />

// 								<p className='max-w-lg text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quisquam voluptates nostrum! Reprehenderit excepturi in possimus corporis aut! Deserunt soluta obcaecati culpa totam voluptatum natus hic distinctio voluptatibus dolore mollitia.</p>
// 							</div>
// 						</div>
// 					</section>
// 					<section className='bg-green-600 page w-full  h-screen '>
// 						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis ab at iure laudantium eveniet beatae, cupiditate accusantium, molestiae praesentium velit itaque dolor odio omnis vitae consectetur cumque eligendi provident commodi!
// 					</section>
// 				</div>
// 			</div>
// 		</>

// 	)
// }


function DiaryConatiner() {
	return (
		<>
			<section className='content-container min-h-screen flex gap-4 flex-col py-8 bg-noise-filter'>

				<h3 className='subheading'>/ About Us</h3>
				<hr className='mb-8' />

				<div className=' w-full h-full grid grid-cols-1 md:grid-cols-2 flex-grow items-center justify-items-end'>
					<p className='max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quisquam voluptates nostrum! Reprehenderit excepturi in possimus corporis aut! Deserunt soluta obcaecati culpa totam voluptatum natus hic distinctio voluptatibus dolore mollitia.</p>

					<Image width={400} height={400} alt='flc' src={sampleImage} />
				</div>

				<hr />
				<div className='flex justify-between'>
					<span>+</span>

					<div className='flex gap-1'>
						<div className='charge filled'></div>
						<div className='charge'></div>
						<div className='charge'></div>

						<div className='charge'></div>
					</div>
				</div>
			</section>

			<section className='content-container min-h-screen flex gap-4 flex-col py-8'>

				<h3 className='subheading'>/ HackFest</h3>
				<hr className='mb-8' />

				<div className=' w-full h-full flex flex-col flex-grow justify-evenly items-center text-center'>
					<Image width={400} height={400} alt='flc' src={sampleImage} />
					<p className='max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi quisquam voluptates nostrum! Reprehenderit excepturi in possimus corporis aut! Deserunt soluta obcaecati culpa totam voluptatum natus hic distinctio voluptatibus dolore mollitia.</p>
				</div>

				<hr />
				<div className='flex justify-between'>
					<span>+</span>

					<div className='flex gap-1'>
						<div className='charge filled'></div>
						<div className='charge filled'></div>
						<div className='charge'></div>
						<div className='charge'></div>
					</div>
				</div>
			</section>


			<section className='content-container min-h-screen flex gap-4 flex-col py-8 bg-noise-filter'>

				<h3 className='subheading'>/ TechStack</h3>
				<hr className='mb-8' />

				<strong className='font-semibold text-2xl'>
					Work on new Trending Tech Stack
				</strong>

				<p className='text-justify'>Get a chance to explore and innovate using the in-demand Tech Stack! Get your hands to code your idea and enter the world of developers!</p>

				<div className=' w-full h-full flex flex-col flex-grow justify-between items-center'>
					<Marquee className='flex flex-nowrap w-full'>
						{techs.map(tech => {
							return (
								<div className='aspect-square w-60 border-foreground border-y ' key={tech.name}>
									<div className='my-4 border-foreground border-x'>
										<Image width={300} height={300} alt='flc' src={tech.icon} />
									</div>
								</div>
							)
						})}

					</Marquee>
					<Marquee className='flex flex-nowrap w-full' direction='right'>
						{techs.map(tech => {
							return (
								<div className='aspect-square w-60 border-foreground border-t' key={tech.name}>
									<div className='my-4 border-foreground border-x'>
										<Image width={300} height={300} alt='flc' src={tech.icon} />
									</div>
								</div>
							)
						})}

					</Marquee>

				

				</div>

				<hr />
				<div className='flex justify-between'>
					<span>+</span>

					<div className='flex gap-1'>
						<div className='charge filled'></div>
						<div className='charge filled'></div>
						<div className='charge filled'></div>
						<div className='charge'></div>
					</div>
				</div>
			</section>

		</>
	)
}

export default DiaryConatiner

