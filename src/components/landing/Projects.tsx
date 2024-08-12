"use client";

import { useGSAP } from "@gsap/react";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { type ReactNode, useRef } from "react";

import Button from "~/components/Button";
import { cn } from "~/lib/utils";

function Projects() {
  const ref = useRef(null);
  useGSAP(() => {
    gsap.from(".project", {
      opacity: 0,
      y: 100,
      stagger: {
        grid: "auto",
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ref.current,
        toggleActions: "restart none none reverse",
      },
    });
  }, []);

  const refs = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        refs.current,
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
            trigger: refs.current,
            toggleActions: "restart none none reverse",
          },
        },
      );
    },
    { scope: refs },
  );

  return (
    <section className="content-container mb-14 flex min-h-[80vh] flex-col items-center  gap-4 ">
      <h3
        className="rounded-r-full border border-yellow-700 p-4 text-center text-4xl font-semibold"
        ref={refs}
      >
        Projects Done By Flc Team
      </h3>
      <p>Get opportunity to work on numerous real-world projects</p>

      {/* BentoGrid Section */}
      <div className="w-full">
        <BentoGrid className="mx-auto max-w-4xl md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>

      <Button className="mx-auto bg-white text-black">
        View All Past Projects
      </Button>
    </section>
  );
}

export default Projects;

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-6 md:grid-cols-3", className)}>
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  title: string;
  description?: ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export function BentoGridItem({
  title,
  description,
  header,
  icon,
  className,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "project flex flex-col rounded-lg bg-white p-4 shadow-lg dark:bg-black",
        className,
      )}
    >
      <div className="mb-4 flex items-center space-x-2">
        {icon}
        <h4 className="text-lg font-semibold">{title}</h4>
      </div>
      <div className="flex-1">{header}</div>
      <p className="mt-4 text-neutral-500">{description}</p>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2"
    >
      <motion.div className="h-full w-full">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src="/hackfest.jpg"
            alt="sample"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2"
    >
      <motion.div className="h-full w-full">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src="/yaksha.jpg"
            alt="sample"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col overflow-hidden rounded-lg"
    >
      <motion.div className="h-full w-full">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src="/digitalhunt.jpg"
            alt="sample"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        {" "}
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/dol.jpg"
            alt="sample"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
      <motion.div className="relative z-20 flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black">
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/toc.jpg"
            alt="sample"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
      <motion.div
        variants={second}
        className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4 dark:border-white/[0.1] dark:bg-black"
      >
        <div className="relative h-48 w-full overflow-hidden rounded-lg">
          <Image
            src="/dod.jpg"
            alt="sample"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      scale: 0.6,
    },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
      },
    },
    tap: {
      scale: 0.9,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="animate"
      whileTap="tap"
      variants={variants}
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col items-center justify-center space-y-2"
    >
      <motion.div className="h-full w-full">
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <Image
            src="/techadvent.jpg"
            alt="sample"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "HackFest Website",
    description: (
      <span className="text-sm">
        48 hours offline Hackathon organised by flc
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Yakshagavishti",
    description: <span className="text-sm">Yakshagana fest CLub webiste</span>,
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Digital Hunt",
    description: (
      <span className="text-sm">Digital Hunt online codingquiz game</span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Incredia Webistes",

    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Tech Advent",
    description: (
      <span className="text-sm">
        Online coding challage organied by flc in Incredia
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
