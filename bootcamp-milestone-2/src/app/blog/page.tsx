import BlogPreview from "@/components/blogPreview";
import blogs from "../blogData";

export default function Blog() {
  return (
    <main>
      <h1 className="title1">Blog</h1>
      {blogs.map((blog) => (
        <BlogPreview
          key={blog.title}
          title={blog.title}
          date={blog.date}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug={blog.slug}
          html={blog.html}
        />
      ))}
    </main>
  );
}
