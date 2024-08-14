import { Button } from "~/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

import BlogCard from "~/components/blogs/blogCard";
import { api } from "~/utils/api";

function Blogs() {
  const { data: blogs } = api.blog.getPublishedBlogs.useQuery();
  const { data: myBlogs } = api.blog.getMyBlogs.useQuery();

  return (
    <Tabs defaultValue="blogs" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="blogs">Blogs</TabsTrigger>
        <TabsTrigger value="your-blogs">Your Blogs</TabsTrigger>
      </TabsList>
      <TabsContent value="blogs">
        <div className="content-container flex flex-col gap-6">
          {blogs?.map((blog, index) => <BlogCard key={index} blog={blog} />)}
        </div>
      </TabsContent>
      <TabsContent value="your-blogs">
        <div className="content-container flex flex-col gap-6">
          <div className="mb-4">
            <Button>Add Blog</Button>
          </div>
          {myBlogs?.map((blog, index) => <BlogCard key={index} blog={blog} />)}
        </div>
      </TabsContent>
    </Tabs>
  );
}
export default Blogs;
