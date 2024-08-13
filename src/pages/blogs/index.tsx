import { Button } from "~/components/ui/button";


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs";
import BlogCard from "~/components/blogs/BlogCard";
// Adjust the import path as needed

// Dummy data for blogs
const blogData = [
  {
    title: 'Sample Blog 1',
    desc: 'This is a short description of the first sample blog post.',
    date: '2024-08-10',
    image: '/poster2.webp',
    slug: 'sample-blog-1',
 
    tags: ['Technology', 'React', 'JavaScript'],
    views: 1024,
  },
  {
    title: 'Sample Blog 2',
    desc: 'This is a short description of the second sample blog post.',
    date: '2024-08-11',
    image: '/poster3.webp',
    slug: 'sample-blog-2',

    tags: ['Web Development', 'Next.js', 'TypeScript'],
    views: 512,
  },

];

function Blogs() {
  return (
    <Tabs defaultValue="blogs" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="blogs">Blogs</TabsTrigger>
        <TabsTrigger value="your-blogs">Your Blogs</TabsTrigger>
      </TabsList>
      <TabsContent value="blogs">
        <div className="content-container flex flex-col gap-6">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              desc={blog.desc}
              date={blog.date}
              image={blog.image}
              slug={blog.slug}
      
              tags={blog.tags}
              views={blog.views}
            />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="your-blogs">
        <div className="flex flex-col gap-6 content-container">
          <div className="mb-4">
            <Button>Add Blog</Button>
          </div>
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              desc={blog.desc}
              date={blog.date}
              image={blog.image}
              slug={blog.slug}
           
              tags={blog.tags}
              views={blog.views}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
export default Blogs
