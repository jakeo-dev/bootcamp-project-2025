import Project from "@/components/Project";

export default function Portfolio() {
  return (
    <main>
      <h1 className="title1">Portfolio</h1>

      <p>See my complete portfolio on my official website or LinkedIn:</p>
      <div className="flex gap-3 mt-2">
        <a
          href="https://jakeo.dev"
          target="_blank"
          className="bg-orange-800 text-stone-100 px-2.25 py-1 rounded-md hover:shadow-sm active:shadow-none hover:scale-102 active:scale-100 hover:bg-orange-700 active:bg-orange-600 transition"
        >
          JakeO.dev
        </a>
        <a
          href="https://https://www.linkedin.com/in/jakeo-dev/"
          target="_blank"
          className="bg-orange-800 text-stone-100 px-2.25 py-1 rounded-md hover:shadow-sm active:shadow-none hover:scale-102 active:scale-100 hover:bg-orange-700 active:bg-orange-600 transition"
        >
          LinkedIn
        </a>
      </div>

      <Project
        title="Everydle"
        description="Every game of Wordle at the same time."
        icon="/everydle.png"
        websiteLink="https://jakeo.dev/projects/everydle"
        githubLink="https://github.com/jakeo-dev/everydle"
      />

      <Project
        title="Pairckle"
        description="Rank your favorite things easily, accurately, and pairwisely."
        icon="/pairckle-icon.png"
        websiteLink="https://jakeo.dev/projects/pairckle"
        githubLink="https://github.com/jakeo-dev/pairckle"
      />

      <Project
        title="WashWise"
        description="Discover and reduce the impact of your showers."
        icon="/splash-icon.png"
        websiteLink="https://jakeo.dev/projects/washwise"
        githubLink="https://github.com/jakeo-dev/washwise"
      />

      <Project
        title="JakeO.dev"
        description="See my official portfolio website with all of my projects, posts, and profiles."
        icon="/solid-gradient-blue-gray-bunny.png"
        websiteLink="https://jakeo.dev/projects/jakeo"
        githubLink="https://github.com/jakeo-dev/jakeo.dev"
      />
    </main>
  );
}
