import React from "react";

import BlogsTable from "~/components/admin/blogs/blogs-table";

const Blogs = () => {
  return (
    <div className="w-full space-y-4  bg-[#373A40] p-8">
      <h1 className="text-xl font-extrabold ">Publish Blogs</h1>
      <BlogsTable />
    </div>
  );
};

export default Blogs;
