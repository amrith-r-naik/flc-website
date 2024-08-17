import React from "react";

import BlogCard from "~/components/blogs/blogCard";
import { api } from "~/utils/api";

const Blogs = () => {
  const { data: allBogs } = api.blog.getAllBlogs.useQuery();
  return (
    <div className="w-full space-y-4  bg-[#373A40] p-8">
      <h1 className="text-xl font-extrabold ">Publish Blogs</h1>
      <div className=" flex flex-col gap-6">
        {allBogs?.map((blog, index) => (
          <BlogCard key={index} blog={blog} admin={true} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
