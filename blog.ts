type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

const blogposts: Blog[] = [
  {
    title: "Who, What, Where, When, Why, and How Am I?",
    date: "October 11th, 2025",
    description: "What?",
    image: "/bottom-up-view-washington.jpg",
    imageAlt: "Bottom-up view of trees in Snoqualmie, Washington",
    slug: "who-what-where-when-why-and-how-am-i",
  },
  {
    title: "Dialing Letters Instead of Digits",
    date: "August 18th, 2024",
    description:
      "How I improved the code of my vanity phone number generator website, Cifra.",
    image: "https://www.jakeo.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail.baee33cf.png&w=3840&q=75",
    imageAlt: "Overlapping lists of random words and numbers",
    slug: "dialing-letters-instead-of-digits",
  },
];

const blogContainer = document.getElementById("blog-container");

blogposts.forEach((post) => {
  const postDiv = document.createElement("div");

  const title = document.createElement("h2");
  const a = document.createElement("a");
  a.href = `/${post.slug}.html`;
  a.textContent = post.title;
  title.appendChild(a);

  const description = document.createElement("p");
  description.textContent = post.description;

  const image = document.createElement("img");
  image.src = post.image;
  image.alt = post.imageAlt;
  image.className = "post-image";

  postDiv.appendChild(title);
  postDiv.appendChild(description);
  postDiv.appendChild(image);

  if (blogContainer) blogContainer.appendChild(postDiv);
});
