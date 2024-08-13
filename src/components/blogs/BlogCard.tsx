import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaPencilAlt } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

// import { ReadTimeResults } from 'reading-time';
// import SlotCounter from 'react-slot-counter';

interface BlogCardProps {
  title: string;
  desc: string;
  date: string;
  image: string;
  slug: string;
  //   readingTime: ReadTimeResults;
  tags: string[];
  views: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  desc,
  date,
  image,
  slug,
  //   readingTime,
  tags,
  views,
}) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    dateObj,
  );
  const day = dateObj.getDate();

  return (
    <div className="hover:animate-background flex flex-col rounded-xl bg-gray-700 from-gray-700 via-gray-500 to-gray-700 p-0.5 shadow-xl transition hover:bg-gradient-to-r hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] md:flex-row">
      <div>
        <Link href={`/blog/${slug}`}>
          <Image
            alt="Blog Image"
            className="h-full w-full rounded-xl object-cover"
            src={image}
            width={300}
            height={300}
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="p-4 sm:p-6">
          <Link href={`/blog/${slug}`}>
            <h1 className="line-clamp-1 font-bold text-secondary">{title}</h1>
          </Link>
          <div className="flex w-full flex-col items-center gap-4 py-2 text-xs font-bold text-white md:flex-row">
            <span className="w-full text-center uppercase md:w-28 md:text-left">
              {month} {day}, {year}
            </span>
            <div className="no-scrollbar flex w-full gap-1 overflow-x-auto">
              {tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className="block max-w-fit whitespace-nowrap rounded-xl bg-gray-600 px-2 py-1 text-xs text-gray-300 md:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href={`/blog/${slug}`}>
            <p className="line-clamp-3 text-sm/relaxed text-gray-300">{desc}</p>
          </Link>

          <div className="mt-3 flex items-center gap-2 text-xs text-gray-300">
            <span className="inline-flex items-center gap-1">
              <IoEyeSharp />
              {/* <SlotCounter
                value={views}
                duration={2}
                animateOnVisible={{
                  triggerOnce: true,
                  rootMargin: '0px 0px -100px 0px',
                }}
                startValue={0}
              /> */}
              <span className="hidden md:inline">views</span>
            </span>
            |{" "}
            {/* <span className="inline-flex items-center gap-1">
              <FaBookOpen />
              {readingTime.text}
            </span>{' '}
            |{' '}
            <span className="inline-flex items-center gap-1">
              <FaPencilAlt />
              {readingTime.words} words
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
