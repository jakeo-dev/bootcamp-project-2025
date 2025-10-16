import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1 className="title1">Hi, I'm Jake</h1>
      <div className="about">
        <div className="mb-12 flex justify-start">
          <Image
            src="/flamingos.png"
            alt="Flamingos"
            width={300}
            height={150}
            className="w-[80%] border-4 h-36 border-orange-400 object-cover object-center rounded-2xl shadow-md"
          />
        </div>
        <p className="bg-stone-300 rounded-md shadow-sm w-full p-3 text-center text-pretty">
          I'm a Computer Science student at Cal Poly SLO who likes to build
          digital things.
        </p>
        <div className="my-12 flex justify-center">
          <Image
            src="/google-art.png"
            alt="Google art"
            width={300}
            height={150}
            className="w-[80%] border-4 h-36 border-orange-400 object-cover object-top rounded-2xl shadow-md"
          />
        </div>
        <p className="bg-stone-300 rounded-md shadow-sm w-full p-3 text-center text-pretty">
          Right now, I mostly develop web apps using React, Next.js, and
          TypeScript.
        </p>
        <div className="my-12 flex justify-end">
          <Image
            src="/colosseum.png"
            alt="Rubber duck"
            width={300}
            height={150}
            className="w-[80%] border-4 h-36 border-orange-400 object-cover object-top rounded-2xl shadow-md"
          />
        </div>
        <p className="bg-stone-300 rounded-md shadow-sm w-full p-3 text-center text-pretty">
          Almost everything I make is on my GitHub, and my most notable projects
          are featured on <a href="https://jakeo.dev">my website.</a>
        </p>
        <div className="my-12 flex justify-center">
          <Image
            src="/waterfall.png"
            alt="Rubber duck"
            width={300}
            height={150}
            className="w-[80%] border-4 h-36 border-orange-400 object-cover object-center rounded-2xl shadow-md"
          />
        </div>
        <p className="bg-stone-300 rounded-md shadow-sm w-full p-3 text-center text-pretty">
          ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
        </p>
        <div className="my-12 flex justify-start">
          <Image
            src="/rubber-duck.png"
            alt="Rubber duck"
            width={300}
            height={150}
            className="w-[80%] border-4 h-36 border-orange-400 object-cover object-center rounded-2xl shadow-md"
          />
        </div>
      </div>
    </main>
  );
}
