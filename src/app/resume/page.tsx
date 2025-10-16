export default function Resume() {
  return (
    <main>
      <h1 className="title1">Resume</h1>

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

      <div className="resume">
        <section className="section">
          <h2 className="title2">Education</h2>
          <p className="entry-info">
            California Polytechnic State University, San Luis Obispo (Cal Poly)
          </p>
          <p className="entry-info">
            Bachelor of Science Degree in Computer Science
          </p>
          <p className="entry-info">Expected May 2029</p>
        </section>
        <section className="section">
          <h2 className="title2">Skills</h2>
          <div className="entry mt-3">
            <h3 className="entry-title">Languages</h3>
            <ul className="skill-list flex gap-2 mt-1">
              <li className="bg-stone-200 px-2 rounded-md">
                JavaScript
              </li>
              <li className="bg-stone-200 px-2 rounded-md">
                TypeScript
              </li>
              <li className="bg-stone-200 px-2 rounded-md">Python</li>
              <li className="bg-stone-200 px-2 rounded-md">HTML</li>
              <li className="bg-stone-200 px-2 rounded-md">CSS</li>
            </ul>
          </div>
          <div className="entry mt-3">
            <h3 className="entry-title">Frameworks & Libaries</h3>
            <ul className="skill-list flex gap-2 mt-1">
              <li className="bg-stone-200 px-2 rounded-md">React</li>
              <li className="bg-stone-200 px-2 rounded-md">
                React Native
              </li>
              <li className="bg-stone-200 px-2 rounded-md">Next.js</li>
              <li className="bg-stone-200 px-2 rounded-md">
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="entry mt-3">
            <h3 className="entry-title">Software Tools</h3>
            <ul className="skill-list flex gap-2 mt-1">
              <li className="bg-stone-200 px-2 rounded-md">Git</li>
              <li className="bg-stone-200 px-2 rounded-md">GitHub</li>
              <li className="bg-stone-200 px-2 rounded-md">Expo</li>
            </ul>
          </div>
        </section>
        <section className="section">
          <h2 className="title2">Projects</h2>
          <div className="entry">
            <h3 className="title3">
              Everydle{" "}
              <span className="italic text-base">
                (Next.js, React, TypeScript, Tailwind CSS)
              </span>
            </h3>
            <p className="entry-info">
              Developed an open-source web game where users can play every game
              of Wordle
            </p>
            <p className="entry-description">
              Organically reached 1,000+ users within days of launch and
              continue to have consistent daily usage
            </p>
            <p className="entry-description">
              Optimized speed and performance through list virtualization and
              other techniques
            </p>
          </div>

          <div className="entry">
            <h3 className="title3">
              Pairckle{" "}
              <span className="italic text-base">
                (Next.js, React, TypeScript, Tailwind CSS)
              </span>
            </h3>
            <p className="entry-info">
              Designed and launched a platform for high school students to plan
              coursework, extracurriculars, and college applications
            </p>
            <p className="entry-description">
              Collaborated with peers to plan & implement features, maintain
              codebase, and improve UX
            </p>
          </div>

          <div className="entry">
            <h3 className="title3">
              WashWise{" "}
              <span className="italic text-base">
                (React Native, Next.js, React, TypeScript, Tailwind CSS, Expo)
              </span>
            </h3>
            <p className="entry-info">
              Developed a cross-platform app for both Android and web to help
              users track and reduce water usage
            </p>
            <p className="entry-description">
              Designed a responsive, mobile-first UI to ensure a consistent
              experience on all platforms
            </p>
          </div>

          <div className="entry">
            <h3 className="title3">
              JakeO.dev{" "}
              <span className="italic text-base">
                (Next.js, React, TypeScript, Tailwind CSS)
              </span>
            </h3>
            <p className="entry-info">
              Built and maintain an open-source personal portfolio showcasing
              projects and technical blog posts
            </p>
            <p className="entry-description">
              Implemented accessibility improvements to refine user experience
            </p>
          </div>
        </section>
        <section className="section">
          <h2 className="title2">Relevant Coursework</h2>
          <div className="entry">
            <h3 className="title3">Current coursework</h3>
            <ul className="course-list">
              <li>Data Structures</li>
              <li>Calculus II</li>
            </ul>
          </div>

          <div className="entry">
            <h3 className="title3">Other credit</h3>
            <ul className="course-list">
              <li>Fundamentals of Computer Science (credit via AP CSP)</li>
              <li>Introduction to Computing (credit via AP CSA)</li>
              <li>Calculus I (credit via AP Calculus AB)</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
