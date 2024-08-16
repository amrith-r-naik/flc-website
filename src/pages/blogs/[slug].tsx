import { useRouter } from "next/router";
import React from "react";

import { SlugPage } from "~/components/blogs/slugpage";

import NotFound from "../404";

const BlogSlug = () => {
  const router = useRouter();

  const blogId = Array.isArray(router.query.slug)
    ? router.query.slug[0]
    : router.query.slug;

  if (!blogId) return <NotFound />;
  return <SlugPage blogId={blogId} />;
};

export default BlogSlug;
