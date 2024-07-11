"use client"
import React, { useEffect, useRef } from 'react'
import "./style.module.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from 'next/image';
import Marquee from "./Marquee";

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


gsap.registerPlugin(ScrollTrigger)

function DiaryContainer() {
	const containerRef = useRef<HTMLDivElement>(null)
	useGSAP(
		() => {
			let mm = gsap.matchMedia();

			mm.add("(min-width:768px)", () => {
				let sections = gsap.utils.toArray(".page");
				containerRef.current!.style.width = `${sections.length * 100}%`;
				let scrollTween = gsap.to(sections, {
					xPercent: (i) => -100 * i,
					duration: (i) => 0.5 * i,
					// xPercent: -100 * (sections.length - 1),
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						pin: true,
						scrub: 0.1,
					}
				});
			})



			// let headings = gsap.utils.toArray(".page h3");

			// headings.forEach((head,i)=>{
			// 	gsap.to(head, {
			// 		rotate: 90,
			// 		transformOrigin:"left top",
			// 		backgroundColor: "#1e90ff",
			// 		ease: "none",
			// 		scrollTrigger: {
			// 		  containerAnimation: scrollTween,
			// 		  trigger:head,
			// 		  start: "left 50%", // `x  ${-100 * i + 50}%`,
			// 		  end: "left 25%",  //`left  ${-100 * i + 25}%`,
			// 		  scrub: true,
			// 		  id:i
			// 		}
			// 	  });
			// })

			//   sections.forEach((page,index)=>{
			// 		//@ts-ignore
			// 	const q = gsap.utils.selector(page);
			// 	gsap.to(q("h3"), {
			// 		duration: 1,
			// 		scale: 2,
			// 		ease: "none",
			// 		scrollTrigger: {
			// 		  containerAnimation: scrollTween,
			// 		  trigger:page,
			// 		  start: "left right",
			// 		  end: "left left",
			// 		  scrub: true,
			// 		 }
			// 	  });

			//   })

			// const tl = gsap.timeline({
			// 	defaults: {
			// 		ease: "none"
			// 	},
			// 	scrollTrigger: {
			// 		trigger:  containerRef.current,
			// 		pin: true,
			// 		scrub: 0.5
			// 	}
			// });

			// sections.forEach((page,index) => {
			// 	//@ts-ignore
			// 	const q = gsap.utils.selector(page);
			// 	let scrollTween = tl.to(page, {
			// 		xPercent: -(100 * index),
			// 		duration: 0.5 * index
			// 	})

			// 	gsap.to(q("h3"),{
			// 		rotate:"-180deg",
			// 		ease: "none",
			// 		trigger:page,
			// 		start:`x -${(100 * index)}%`,
			// 		end:`x -${(100 * index -100)}%`,
			// 	})

			// });
		}, []
	);

	return (
		<>
			<div className='w-full h-full overflow-x-hidden'>
				<div className='diary-container md:h-screen flex flex-nowrap flex-col md:flex-row relative md:overflow-y-hidden' ref={containerRef}>
					<section className='page bg-noise-filter bg-background'>
						<div className='content-container  flex gap-4 flex-col'>
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
						</div>
					</section>
					<section className='page bg-background'>
						<div className='content-container  flex gap-4 flex-col'>
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
						</div>
					</section>

					<section className='page bg-background'>
						<div className='content-container  flex gap-4 flex-col py-8 bg-noise-filter'>
							<h3 className='subheading'>/ Events</h3>
							<hr className='mb-8' />
							<div className=' w-full h-full flex  flex-grow justify-between items-center'>
								<Image width={400} height={400} alt='flc' src={sampleImage} />
								<Image width={400} height={400} alt='flc' src={sampleImage} />
								<Image width={400} height={400} alt='flc' src={sampleImage} />
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
						</div>
					</section>

					<section className='page bg-background'>
						<div className='content-container  flex gap-4 flex-col py-8 bg-noise-filter'>
							<h3 className='subheading'>/ TechStack</h3>
							<hr className='mb-8' />

							<strong className='font-semibold text-2xl'>
								Work on new Trending Tech Stack
							</strong>

							<p className='text-justify'>Get a chance to explore and innovate using the in-demand Tech Stack! Get your hands to code your idea and enter the world of developers!</p>

							<div className=' w-full h-full flex flex-col flex-grow justify-between items-center overflow-x-hidden relative'>
								<Marquee>
									{techs.map(tech => {
										return (
											<div className='aspect-square w-60 border-foreground border-y' key={tech.name}>
												<div className='my-4 border-foreground border-x'>
													{/* <Image width={300} height={300} alt='flc' src={tech.icon} /> */}
													<p>{tech.name}</p>
												</div>
											</div>
										)
									})}
								</Marquee>

								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, amet asperiores. Doloremque tempore facere, eum debitis ratione est nemo qui rerum perferendis voluptatem ea voluptate ex, odit corporis, earum ut.</p>
							</div>

							<hr />
							<div className='flex justify-between'>
								<span>+</span>

								<div className='flex gap-1'>
									<div className='charge filled'></div>
									<div className='charge filled'></div>
									<div className='charge filled'></div>
									<div className='charge filled'></div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>

	)
}

export default DiaryContainer;

