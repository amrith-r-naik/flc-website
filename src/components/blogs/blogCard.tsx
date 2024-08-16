import { type Blog } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { api } from "~/utils/api";

interface BlogCardProps {
  blog: Blog;
  admin?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, admin }) => {
  const dateObj = new Date(blog.createdAt);
  const year = dateObj.getFullYear();
  const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    dateObj,
  );
  const day = dateObj.getDate();

  const updateBlog = api.blog.updateBlogState.useMutation();
  type BlogState = "PUBLISHED" | "DRAFT";
  return (
    <div className="hover:animate-background flex flex-col rounded-xl bg-gray-700 from-gray-700 via-gray-500 to-gray-700 p-0.5 shadow-xl transition hover:bg-gradient-to-r hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] md:flex-row">
      <div>
        <Link href={`/blog/${blog.id}`}>
          <Image
            alt="Blog Image"
            className="h-full w-full rounded-xl object-cover"
            src={""} // Add your image source here
            width={300}
            height={300}
          />
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="p-4 sm:p-6">
          <Link href={`/blog/${blog.id}`}>
            <h1 className="line-clamp-1 font-bold text-secondary">
              {blog.title}
            </h1>
          </Link>
          <div className="flex w-full flex-col items-center gap-4 py-2 text-xs font-bold text-white md:flex-row">
            <span className="w-full text-center uppercase md:w-28 md:text-left">
              {month} {day}, {year}
            </span>
          </div>

          <Link href={`/blog/${blog.id}`}>
            <p className="line-clamp-3 text-sm/relaxed text-gray-300">
              {blog.discription}
            </p>
          </Link>

          <div className="mt-3 flex items-center gap-2 text-xs text-gray-300">
            <span className="inline-flex items-center gap-1">
              <IoEyeSharp />
              <span className="hidden md:inline">views</span>
            </span>
            |{" "}
          </div>
        </div>

        {admin && (
          <div className="p-4">
            <Select
              onValueChange={async (value) => {
                await updateBlog.mutateAsync({
                  blogId: blog.id,
                  blogState: value as BlogState,
                });
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>State</SelectLabel>
                  <SelectItem value="PUBLISHED">PUBLISHED</SelectItem>
                  <SelectItem value="DRAFT">DRAFT</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
