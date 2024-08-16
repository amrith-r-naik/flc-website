import Image from "next/image";
import { FaBookOpen, FaPencilAlt } from "react-icons/fa";

import { api } from "~/utils/api";

import Loader from "../loader";

export function SlugPage({ blogId }: { blogId: string }) {
  const { data: blog, isLoading } = api.blog.getBlogById.useQuery({
    id: blogId,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <section className="flex w-full flex-col justify-center py-5 md:py-10">
      <div className="prose prose-invert mx-auto py-4">
        <div className="flex items-center justify-between">
          <div className="md:text-md w-fit text-right text-xs">
            {blog.User.name} • {new Date(blog.createdAt).toDateString()}
          </div>
          <div className="block text-xs md:hidden"></div>
        </div>

        <div className="mt-3 flex flex-col justify-center md:flex-row md:justify-between">
          <a className="mb-5 flex items-center gap-2 text-xs text-gray-300 no-underline md:text-sm">
            <span className="inline-flex items-center gap-1">
              <FaBookOpen />
              {blog.readTime}
            </span>
            <span className="inline-flex items-center gap-1">
              <FaPencilAlt />
              {blog.words}
            </span>
          </a>
        </div>
        <div className="sapce-y-12">
          <h1>{blog.title}</h1>
          {blog.images && blog.images.length > 0 && (
            <Image
              src={blog.images[0]!.src}
              alt={blog.images[0]!.title}
              width={1200}
              height={600}
              layout="responsive"
              className="h-auto w-full"
            />
          )}
          <p>{blog?.content}</p>
        </div>
      </div>
    </section>
  );
}
