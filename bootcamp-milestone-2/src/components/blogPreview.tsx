import React from "react";
import { Blog } from "@/types";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
  return (
    <div className="mb-12">
      <h2 className="title2 link">
        <Link href={`/blog/${props.slug}`}>{props.title}</Link>
      </h2>
      <p className="title-subtext1 mb-0">{props.description}</p>
      <p className="title-subtext2">{props.date}</p>
      <div className="mt-3">
        <img
          src={props.image}
          alt={props.imageAlt}
          width={500}
          height={500}
          className="post-image"
        />
      </div>
    </div>
  );
}
