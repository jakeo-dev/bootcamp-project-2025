"use client";
import { use } from "react";
import Image from "next/image";
import blogs from "../../blogData";

export default function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  return (
    <main>
      {blogs
        .filter((b) => b.slug == slug)
        .map((blog) => (
          <div key={blog.title}>
            <h1 className="title1 mb-0">{blog.title}</h1>
            <p className="title-subtext1 mb-0">{blog.description}</p>
            <p className="title-subtext2">{blog.date}</p>
            <Image
              className="post-image"
              src={blog.image}
              alt={blog.imageAlt}
              width={500}
              height={500}
            />
            <div dangerouslySetInnerHTML={{ __html: blog.html }} />
          </div>
        ))}
    </main>
  );
}
