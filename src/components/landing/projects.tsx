// // "use client";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";
// // import Image from "next/image";
// // import { useRef } from "react";
// // import dod from "~/assets/images/dod.jpg";
// // import dol from "~/assets/images/dol.jpg";
// // import Hackfest from "~/assets/images/hackfest.jpg";
// // import waves from "~/assets/images/toc.jpg";
// // import yaksha from "~/assets/images/yaksha.jpg";
// // import { Button } from "../ui/button";
// // function Projects() {
// //   const ref = useRef(null);
// //   useGSAP(() => {
// //     gsap.from(".project", {
// //       opacity: 0,
// //       y: 100,
// //       stagger: {
// //         grid: "auto",
// //         amount: 0.5,
// //       },
// //       scrollTrigger: {
// //         trigger: ref.current,
// //         toggleActions: "restart none none reverse",
// //       },
// //     });
// //   }, []);
// //   const projects = [
// //     { id: 1, title: "Project 1", src:  dod },
// //     { id: 2, title: "Project 2", src: dol },
// //     { id: 3, title: "Project 3", src: waves },
// //     { id: 3, title: "Project 3", src: Hackfest },
// //     { id: 3, title: "Project 3", src:  yaksha},
// //   ];
// //   return (
// //     <section
// //       className="content-container bg-gradient flex min-h-[80vh] flex-col items-center gap-4  "
// //       ref={ref}
// //     >
// //       <h3 className="text-center text-4xl font-semibold">Projects</h3>
// //       <p>Get oppurtunity to Work on numerous real world projects</p>
// //       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-3">
// //         {projects.map((project) => (
// //           <ProjectCard
// //             key={project.id}
// //             title={project.title}
// //             src={project.src}
// //           />
// //         ))}
// //       </div>
// //       <Button className="mx-auto">View All past projects</Button>
// //     </section>
// //   );
// // }
// // export default Projects;
// // interface props {
// //   title: string;
// //   src: string;
// // }
// // const ProjectCard = ({ title, src }:props) => (
// //   <div className="relative overflow-hidden rounded w-full h-80"> {/* Ensuring all cards are the same size */}
// //     <Image
// //       src={src}
// //       alt={title}
// //       layout="fill" // Ensure image covers the entire container
// //       objectFit="cover" // Cover the entire area of the container
// //       className="absolute inset-0"
// //     />
// //     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
// //       <h2 className="text-white text-xl font-bold">{title}</h2>
// //     </div>
// //   </div>
// // );
// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import Image from "next/image";
// import { useRef } from "react";
// import dod from "~/assets/images/dod.jpg";
// import dol from "~/assets/images/dol.jpg";
// import Hackfest from "~/assets/images/hackfest.jpg";
// import waves from "~/assets/images/toc.jpg";
// import yaksha from "~/assets/images/yaksha.jpg";
// import { Button } from "../ui/button";
// import { type StaticImageData } from 'next/image';
// interface Project {
//   id: number;
//   title: string;
//   src: StaticImageData;
// }
// const ProjectCard: React.FC<{ title: string; src: StaticImageData }> = ({ title, src }) => (
//   <div className="relative overflow-hidden rounded w-full h-80">
//     <Image
//       src={src}
//       alt={title}
//       layout="fill"
//       objectFit="cover"
//       className="absolute inset-0"
//     />
//     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
//       <h2 className="text-white text-xl font-bold">{title}</h2>
//     </div>
//   </div>
// );
// function Projects() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   useGSAP(() => {
//     gsap.from(".project", {
//       opacity: 0,
//       y: 100,
//       stagger: {
//         grid: "auto",
//         amount: 0.5,
//       },
//       scrollTrigger: {
//         trigger: ref.current,
//         toggleActions: "restart none none reverse",
//       },
//     });
//   }, []);
//   const projects: Project[] = [
//     { id: 1, title: "Project 1", src: dod },
//     { id: 2, title: "Project 2", src: dol },
//     { id: 3, title: "Project 3", src: waves },
//     { id: 4, title: "Project 4", src: Hackfest },
//     { id: 5, title: "Project 5", src: yaksha },
//   ];
//   return (
//     <section
//       className=" bg-gradient flex min-h-[80vh] flex-col items-center gap-4"
//       ref={ref}
//     >
//       <h3 className="text-center text-4xl font-semibold">Projects</h3>
//       <p>Get the opportunity to work on numerous real-world projects</p>
//       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-5">
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             src={project.src}
//           />
//         ))}
//       </div>
//       <Button className="mx-auto">View All Past Projects</Button>
//     </section>
//   );
// }
// export default Projects;
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { type StaticImageData } from "next/image";
import { useRef } from "react";

import dod from "~/assets/images/dod.jpg";
import dol from "~/assets/images/dol.jpg";
import Hackfest from "~/assets/images/hackfest.jpg";
import waves from "~/assets/images/toc.jpg";
import yaksha from "~/assets/images/yaksha.jpg";

import { Button } from "../ui/button";

// // "use client";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";
// // import Image from "next/image";
// // import { useRef } from "react";
// // import dod from "~/assets/images/dod.jpg";
// // import dol from "~/assets/images/dol.jpg";
// // import Hackfest from "~/assets/images/hackfest.jpg";
// // import waves from "~/assets/images/toc.jpg";
// // import yaksha from "~/assets/images/yaksha.jpg";
// // import { Button } from "../ui/button";
// // function Projects() {
// //   const ref = useRef(null);
// //   useGSAP(() => {
// //     gsap.from(".project", {
// //       opacity: 0,
// //       y: 100,
// //       stagger: {
// //         grid: "auto",
// //         amount: 0.5,
// //       },
// //       scrollTrigger: {
// //         trigger: ref.current,
// //         toggleActions: "restart none none reverse",
// //       },
// //     });
// //   }, []);
// //   const projects = [
// //     { id: 1, title: "Project 1", src:  dod },
// //     { id: 2, title: "Project 2", src: dol },
// //     { id: 3, title: "Project 3", src: waves },
// //     { id: 3, title: "Project 3", src: Hackfest },
// //     { id: 3, title: "Project 3", src:  yaksha},
// //   ];
// //   return (
// //     <section
// //       className="content-container bg-gradient flex min-h-[80vh] flex-col items-center gap-4  "
// //       ref={ref}
// //     >
// //       <h3 className="text-center text-4xl font-semibold">Projects</h3>
// //       <p>Get oppurtunity to Work on numerous real world projects</p>
// //       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-3">
// //         {projects.map((project) => (
// //           <ProjectCard
// //             key={project.id}
// //             title={project.title}
// //             src={project.src}
// //           />
// //         ))}
// //       </div>
// //       <Button className="mx-auto">View All past projects</Button>
// //     </section>
// //   );
// // }
// // export default Projects;
// // interface props {
// //   title: string;
// //   src: string;
// // }
// // const ProjectCard = ({ title, src }:props) => (
// //   <div className="relative overflow-hidden rounded w-full h-80"> {/* Ensuring all cards are the same size */}
// //     <Image
// //       src={src}
// //       alt={title}
// //       layout="fill" // Ensure image covers the entire container
// //       objectFit="cover" // Cover the entire area of the container
// //       className="absolute inset-0"
// //     />
// //     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
// //       <h2 className="text-white text-xl font-bold">{title}</h2>
// //     </div>
// //   </div>
// // );
// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import Image from "next/image";
// import { useRef } from "react";
// import dod from "~/assets/images/dod.jpg";
// import dol from "~/assets/images/dol.jpg";
// import Hackfest from "~/assets/images/hackfest.jpg";
// import waves from "~/assets/images/toc.jpg";
// import yaksha from "~/assets/images/yaksha.jpg";
// import { Button } from "../ui/button";
// import { type StaticImageData } from 'next/image';
// interface Project {
//   id: number;
//   title: string;
//   src: StaticImageData;
// }
// const ProjectCard: React.FC<{ title: string; src: StaticImageData }> = ({ title, src }) => (
//   <div className="relative overflow-hidden rounded w-full h-80">
//     <Image
//       src={src}
//       alt={title}
//       layout="fill"
//       objectFit="cover"
//       className="absolute inset-0"
//     />
//     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
//       <h2 className="text-white text-xl font-bold">{title}</h2>
//     </div>
//   </div>
// );
// function Projects() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   useGSAP(() => {
//     gsap.from(".project", {
//       opacity: 0,
//       y: 100,
//       stagger: {
//         grid: "auto",
//         amount: 0.5,
//       },
//       scrollTrigger: {
//         trigger: ref.current,
//         toggleActions: "restart none none reverse",
//       },
//     });
//   }, []);
//   const projects: Project[] = [
//     { id: 1, title: "Project 1", src: dod },
//     { id: 2, title: "Project 2", src: dol },
//     { id: 3, title: "Project 3", src: waves },
//     { id: 4, title: "Project 4", src: Hackfest },
//     { id: 5, title: "Project 5", src: yaksha },
//   ];
//   return (
//     <section
//       className=" bg-gradient flex min-h-[80vh] flex-col items-center gap-4"
//       ref={ref}
//     >
//       <h3 className="text-center text-4xl font-semibold">Projects</h3>
//       <p>Get the opportunity to work on numerous real-world projects</p>
//       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-5">
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             src={project.src}
//           />
//         ))}
//       </div>
//       <Button className="mx-auto">View All Past Projects</Button>
//     </section>
//   );
// }
// export default Projects;

// // "use client";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";
// // import Image from "next/image";
// // import { useRef } from "react";
// // import dod from "~/assets/images/dod.jpg";
// // import dol from "~/assets/images/dol.jpg";
// // import Hackfest from "~/assets/images/hackfest.jpg";
// // import waves from "~/assets/images/toc.jpg";
// // import yaksha from "~/assets/images/yaksha.jpg";
// // import { Button } from "../ui/button";
// // function Projects() {
// //   const ref = useRef(null);
// //   useGSAP(() => {
// //     gsap.from(".project", {
// //       opacity: 0,
// //       y: 100,
// //       stagger: {
// //         grid: "auto",
// //         amount: 0.5,
// //       },
// //       scrollTrigger: {
// //         trigger: ref.current,
// //         toggleActions: "restart none none reverse",
// //       },
// //     });
// //   }, []);
// //   const projects = [
// //     { id: 1, title: "Project 1", src:  dod },
// //     { id: 2, title: "Project 2", src: dol },
// //     { id: 3, title: "Project 3", src: waves },
// //     { id: 3, title: "Project 3", src: Hackfest },
// //     { id: 3, title: "Project 3", src:  yaksha},
// //   ];
// //   return (
// //     <section
// //       className="content-container bg-gradient flex min-h-[80vh] flex-col items-center gap-4  "
// //       ref={ref}
// //     >
// //       <h3 className="text-center text-4xl font-semibold">Projects</h3>
// //       <p>Get oppurtunity to Work on numerous real world projects</p>
// //       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-3">
// //         {projects.map((project) => (
// //           <ProjectCard
// //             key={project.id}
// //             title={project.title}
// //             src={project.src}
// //           />
// //         ))}
// //       </div>
// //       <Button className="mx-auto">View All past projects</Button>
// //     </section>
// //   );
// // }
// // export default Projects;
// // interface props {
// //   title: string;
// //   src: string;
// // }
// // const ProjectCard = ({ title, src }:props) => (
// //   <div className="relative overflow-hidden rounded w-full h-80"> {/* Ensuring all cards are the same size */}
// //     <Image
// //       src={src}
// //       alt={title}
// //       layout="fill" // Ensure image covers the entire container
// //       objectFit="cover" // Cover the entire area of the container
// //       className="absolute inset-0"
// //     />
// //     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
// //       <h2 className="text-white text-xl font-bold">{title}</h2>
// //     </div>
// //   </div>
// // );
// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import Image from "next/image";
// import { useRef } from "react";
// import dod from "~/assets/images/dod.jpg";
// import dol from "~/assets/images/dol.jpg";
// import Hackfest from "~/assets/images/hackfest.jpg";
// import waves from "~/assets/images/toc.jpg";
// import yaksha from "~/assets/images/yaksha.jpg";
// import { Button } from "../ui/button";
// import { type StaticImageData } from 'next/image';
// interface Project {
//   id: number;
//   title: string;
//   src: StaticImageData;
// }
// const ProjectCard: React.FC<{ title: string; src: StaticImageData }> = ({ title, src }) => (
//   <div className="relative overflow-hidden rounded w-full h-80">
//     <Image
//       src={src}
//       alt={title}
//       layout="fill"
//       objectFit="cover"
//       className="absolute inset-0"
//     />
//     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
//       <h2 className="text-white text-xl font-bold">{title}</h2>
//     </div>
//   </div>
// );
// function Projects() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   useGSAP(() => {
//     gsap.from(".project", {
//       opacity: 0,
//       y: 100,
//       stagger: {
//         grid: "auto",
//         amount: 0.5,
//       },
//       scrollTrigger: {
//         trigger: ref.current,
//         toggleActions: "restart none none reverse",
//       },
//     });
//   }, []);
//   const projects: Project[] = [
//     { id: 1, title: "Project 1", src: dod },
//     { id: 2, title: "Project 2", src: dol },
//     { id: 3, title: "Project 3", src: waves },
//     { id: 4, title: "Project 4", src: Hackfest },
//     { id: 5, title: "Project 5", src: yaksha },
//   ];
//   return (
//     <section
//       className=" bg-gradient flex min-h-[80vh] flex-col items-center gap-4"
//       ref={ref}
//     >
//       <h3 className="text-center text-4xl font-semibold">Projects</h3>
//       <p>Get the opportunity to work on numerous real-world projects</p>
//       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-5">
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             src={project.src}
//           />
//         ))}
//       </div>
//       <Button className="mx-auto">View All Past Projects</Button>
//     </section>
//   );
// }
// export default Projects;

// // "use client";
// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";
// // import Image from "next/image";
// // import { useRef } from "react";
// // import dod from "~/assets/images/dod.jpg";
// // import dol from "~/assets/images/dol.jpg";
// // import Hackfest from "~/assets/images/hackfest.jpg";
// // import waves from "~/assets/images/toc.jpg";
// // import yaksha from "~/assets/images/yaksha.jpg";
// // import { Button } from "../ui/button";
// // function Projects() {
// //   const ref = useRef(null);
// //   useGSAP(() => {
// //     gsap.from(".project", {
// //       opacity: 0,
// //       y: 100,
// //       stagger: {
// //         grid: "auto",
// //         amount: 0.5,
// //       },
// //       scrollTrigger: {
// //         trigger: ref.current,
// //         toggleActions: "restart none none reverse",
// //       },
// //     });
// //   }, []);
// //   const projects = [
// //     { id: 1, title: "Project 1", src:  dod },
// //     { id: 2, title: "Project 2", src: dol },
// //     { id: 3, title: "Project 3", src: waves },
// //     { id: 3, title: "Project 3", src: Hackfest },
// //     { id: 3, title: "Project 3", src:  yaksha},
// //   ];
// //   return (
// //     <section
// //       className="content-container bg-gradient flex min-h-[80vh] flex-col items-center gap-4  "
// //       ref={ref}
// //     >
// //       <h3 className="text-center text-4xl font-semibold">Projects</h3>
// //       <p>Get oppurtunity to Work on numerous real world projects</p>
// //       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-3">
// //         {projects.map((project) => (
// //           <ProjectCard
// //             key={project.id}
// //             title={project.title}
// //             src={project.src}
// //           />
// //         ))}
// //       </div>
// //       <Button className="mx-auto">View All past projects</Button>
// //     </section>
// //   );
// // }
// // export default Projects;
// // interface props {
// //   title: string;
// //   src: string;
// // }
// // const ProjectCard = ({ title, src }:props) => (
// //   <div className="relative overflow-hidden rounded w-full h-80"> {/* Ensuring all cards are the same size */}
// //     <Image
// //       src={src}
// //       alt={title}
// //       layout="fill" // Ensure image covers the entire container
// //       objectFit="cover" // Cover the entire area of the container
// //       className="absolute inset-0"
// //     />
// //     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
// //       <h2 className="text-white text-xl font-bold">{title}</h2>
// //     </div>
// //   </div>
// // );
// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import Image from "next/image";
// import { useRef } from "react";
// import dod from "~/assets/images/dod.jpg";
// import dol from "~/assets/images/dol.jpg";
// import Hackfest from "~/assets/images/hackfest.jpg";
// import waves from "~/assets/images/toc.jpg";
// import yaksha from "~/assets/images/yaksha.jpg";
// import { Button } from "../ui/button";
// import { type StaticImageData } from 'next/image';
// interface Project {
//   id: number;
//   title: string;
//   src: StaticImageData;
// }
// const ProjectCard: React.FC<{ title: string; src: StaticImageData }> = ({ title, src }) => (
//   <div className="relative overflow-hidden rounded w-full h-80">
//     <Image
//       src={src}
//       alt={title}
//       layout="fill"
//       objectFit="cover"
//       className="absolute inset-0"
//     />
//     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
//       <h2 className="text-white text-xl font-bold">{title}</h2>
//     </div>
//   </div>
// );
// function Projects() {
//   const ref = useRef<HTMLDivElement | null>(null);
//   useGSAP(() => {
//     gsap.from(".project", {
//       opacity: 0,
//       y: 100,
//       stagger: {
//         grid: "auto",
//         amount: 0.5,
//       },
//       scrollTrigger: {
//         trigger: ref.current,
//         toggleActions: "restart none none reverse",
//       },
//     });
//   }, []);
//   const projects: Project[] = [
//     { id: 1, title: "Project 1", src: dod },
//     { id: 2, title: "Project 2", src: dol },
//     { id: 3, title: "Project 3", src: waves },
//     { id: 4, title: "Project 4", src: Hackfest },
//     { id: 5, title: "Project 5", src: yaksha },
//   ];
//   return (
//     <section
//       className=" bg-gradient flex min-h-[80vh] flex-col items-center gap-4"
//       ref={ref}
//     >
//       <h3 className="text-center text-4xl font-semibold">Projects</h3>
//       <p>Get the opportunity to work on numerous real-world projects</p>
//       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-5">
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             src={project.src}
//           />
//         ))}
//       </div>
//       <Button className="mx-auto">View All Past Projects</Button>
//     </section>
//   );
// }
// export default Projects;

// // "use client";

// // import { useGSAP } from "@gsap/react";
// // import gsap from "gsap";
// // import Image from "next/image";
// // import { useRef } from "react";

// // import dod from "~/assets/images/dod.jpg";
// // import dol from "~/assets/images/dol.jpg";
// // import Hackfest from "~/assets/images/hackfest.jpg";
// // import waves from "~/assets/images/toc.jpg";
// // import yaksha from "~/assets/images/yaksha.jpg";
// // import { Button } from "../ui/button";

// // function Projects() {
// //   const ref = useRef(null);
// //   useGSAP(() => {
// //     gsap.from(".project", {
// //       opacity: 0,
// //       y: 100,
// //       stagger: {
// //         grid: "auto",
// //         amount: 0.5,
// //       },
// //       scrollTrigger: {
// //         trigger: ref.current,
// //         toggleActions: "restart none none reverse",
// //       },
// //     });
// //   }, []);

// //   const projects = [
// //     { id: 1, title: "Project 1", src:  dod },
// //     { id: 2, title: "Project 2", src: dol },
// //     { id: 3, title: "Project 3", src: waves },
// //     { id: 3, title: "Project 3", src: Hackfest },
// //     { id: 3, title: "Project 3", src:  yaksha},
// //   ];

// //   return (
// //     <section
// //       className="content-container bg-gradient flex min-h-[80vh] flex-col items-center gap-4  "
// //       ref={ref}
// //     >
// //       <h3 className="text-center text-4xl font-semibold">Projects</h3>
// //       <p>Get oppurtunity to Work on numerous real world projects</p>
// //       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-3">
// //         {projects.map((project) => (
// //           <ProjectCard
// //             key={project.id}
// //             title={project.title}
// //             src={project.src}
// //           />
// //         ))}
// //       </div>
// //       <Button className="mx-auto">View All past projects</Button>
// //     </section>
// //   );
// // }

// // export default Projects;

// // interface props {
// //   title: string;
// //   src: string;
// // }
// // const ProjectCard = ({ title, src }:props) => (
// //   <div className="relative overflow-hidden rounded w-full h-80"> {/* Ensuring all cards are the same size */}
// //     <Image
// //       src={src}
// //       alt={title}
// //       layout="fill" // Ensure image covers the entire container
// //       objectFit="cover" // Cover the entire area of the container
// //       className="absolute inset-0"
// //     />
// //     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
// //       <h2 className="text-white text-xl font-bold">{title}</h2>
// //     </div>
// //   </div>
// // );

// "use client";

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import Image from "next/image";
// import { useRef } from "react";
// import dod from "~/assets/images/dod.jpg";
// import dol from "~/assets/images/dol.jpg";
// import Hackfest from "~/assets/images/hackfest.jpg";
// import waves from "~/assets/images/toc.jpg";
// import yaksha from "~/assets/images/yaksha.jpg";
// import { Button } from "../ui/button";
// import { type StaticImageData } from 'next/image';

// interface Project {
//   id: number;
//   title: string;
//   src: StaticImageData;
// }

// const ProjectCard: React.FC<{ title: string; src: StaticImageData }> = ({ title, src }) => (
//   <div className="relative overflow-hidden rounded w-full h-80">
//     <Image
//       src={src}
//       alt={title}
//       layout="fill"
//       objectFit="cover"
//       className="absolute inset-0"
//     />
//     <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
//       <h2 className="text-white text-xl font-bold">{title}</h2>
//     </div>
//   </div>
// );

// function Projects() {
//   const ref = useRef<HTMLDivElement | null>(null);

//   useGSAP(() => {
//     gsap.from(".project", {
//       opacity: 0,
//       y: 100,
//       stagger: {
//         grid: "auto",
//         amount: 0.5,
//       },
//       scrollTrigger: {
//         trigger: ref.current,
//         toggleActions: "restart none none reverse",
//       },
//     });
//   }, []);

//   const projects: Project[] = [
//     { id: 1, title: "Project 1", src: dod },
//     { id: 2, title: "Project 2", src: dol },
//     { id: 3, title: "Project 3", src: waves },
//     { id: 4, title: "Project 4", src: Hackfest },
//     { id: 5, title: "Project 5", src: yaksha },
//   ];

//   return (
//     <section
//       className=" bg-gradient flex min-h-[80vh] flex-col items-center gap-4"
//       ref={ref}
//     >
//       <h3 className="text-center text-4xl font-semibold">Projects</h3>
//       <p>Get the opportunity to work on numerous real-world projects</p>
//       <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-5">
//         {projects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             title={project.title}
//             src={project.src}
//           />
//         ))}
//       </div>
//       <Button className="mx-auto">View All Past Projects</Button>
//     </section>
//   );
// }

// export default Projects;

interface Project {
  id: number;
  title: string;
  src: StaticImageData;
}

const ProjectCard: React.FC<{ title: string; src: StaticImageData }> = ({
  title,
  src,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "power1.inOut",
        },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: cardRef.current,
            toggleActions: "restart none none reverse",
            start: "top 80%",
            end: "bottom 20%",
          },
        },
      );
    },
    { scope: cardRef },
  );
  return (
    <div className="relative h-80 w-full overflow-hidden rounded" ref={cardRef}>
      <Image
        src={src}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 rounded-xl"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black to-transparent p-4">
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
    </div>
  );
};

function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        {
          opacity: 0,
          scale: 0.5,
          duration: 3,
          ease: "power1.inOut",
        },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: ref.current,
            toggleActions: "restart none none reverse",
          },
        },
      );
    },
    { scope: ref },
  );

  const projects: Project[] = [
    { id: 1, title: "Project 1", src: dod },
    { id: 2, title: "Project 2", src: dol },
    { id: 3, title: "Project 3", src: waves },
    { id: 4, title: "Project 4", src: Hackfest },
    { id: 5, title: "Project 5", src: yaksha },
  ];

  return (
    <section className="bg-gradient mt-12 flex min-h-[80vh] flex-col items-center gap-4 p-10">
      <h3 className="text-center text-4xl font-semibold" ref={ref}>
        Projects
      </h3>
      <p>Get the opportunity to work on numerous real-world projects</p>
      <div className="grid h-full w-full flex-grow grid-cols-1 place-items-center items-center justify-between gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            src={project.src}
          />
        ))}
      </div>
      <Button className="mx-auto">View All Past Projects</Button>
    </section>
  );
}

export default Projects;
