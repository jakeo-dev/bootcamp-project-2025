import React from "react";
import Image from "next/image";

export default function Project(props: {
  title: string;
  description: string;
  icon: string;
  websiteLink: string;
  githubLink: string;
}) {
  return (
    <div className="bg-stone-300 mt-5 p-5 rounded-lg shadow-md hover:-translate-y-0.5 transition duration-300">
      <div className="flex gap-1.5 items-center">
        <a href="https://everydle.jakeo.dev">
          <Image
            src={props.icon}
            width={25}
            height={25}
            alt={`${props.title} icon`}
          />
        </a>
        <p className="title3 my-0">{props.title}</p>
      </div>
      <p className="mt-2">{props.description}</p>
      <div className="flex gap-3 mt-3">
        <a
          href={props.websiteLink}
          target="_blank"
          className="bg-orange-500 text-stone-100 px-2.25 py-1 rounded-md hover:shadow-sm active:shadow-none hover:bg-orange-600 active:bg-orange-700 transition"
        >
          Learn more
        </a>
        <a
          href={props.githubLink}
          target="_blank"
          className="bg-stone-500 text-orange-50 px-2.25 py-1 rounded-md hover:shadow-sm active:shadow-none hover:bg-stone-600 active:bg-stone-700 transition"
        >
          Visit GitHub
        </a>
      </div>
    </div>
  );
}
