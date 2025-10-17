import { Blog } from "@/types";

const blogs: Blog[] = [
  {
    title: "Who, What, Where, When, Why, and How Am I?",
    date: "October 11th, 2025",
    description: "What?",
    image: "/bottom-up-view-washington.jpg",
    imageAlt: "Bottom-up view of trees in Snoqualmie, Washington",
    slug: "who-what-where-when-why-and-how-am-i",
    html: `<h2 class="title2">Who Am I?</h2>
        <p>
            I'm Jake.
        </p>
        <img class="post-image-small" src="/palm-trees.jpg">
        <p class="subtext1">Some palm trees next to the ocean at Pismo Beach.</p>

        <h2 class="title2">What Am I?</h2>
        <p>
            I'm a Computer Science student who likes to build digital things. Right now, I mostly develop web apps using
            React, Next.js, and TypeScript.
        </p>
        <p>
            Here's a(n unordered) list of some other things I like:
        </p>
        <ul class="list-disc list-inside">
            <li>Terraria</li>
            <li>70s/80s pop music</li>
            <li>Board games</li>
            <li>Google software/hardware</li>
            <li>My MacBook Air</li>
            <li>Cats</li>
        </ul>
        <img class="post-image-small" src="/jaxie-and-benny.png">
        <p class="subtext1">One of my cats, Benny, trying to bite the tail of my other cat, Jaxie, for some
            unknown reason.</p>

        <h2 class="title2">Where Am I?</h2>
        <p>
            I'm from the San Francisco Bay Area, but I currently attend Cal Poly in San Luis Obispo, California.
        </p>
        <img class="post-image-small" src="/sierra-madre.jpg">
        <p class="subtext1">Sierra Madre at Cal Poly.</p>
        <p>
            I also like visiting other places, though I haven't traveled much.
        </p>
        <img class="post-image-small" src="/trevi-fountain.png">
        <p class="subtext1">The Trevi Fountain in Rome, Italy.</p>
        <p>
            I'm also on the internet. You can find me on my personal website <a href="https://jakeo.dev"
                target="_blank" class="link">jakeo.dev</a>, or <a href="https://github.com/jakeo-dev" target="_blank" class="link">my GitHub</a>
            or <a href="https://www.linkedin.com/in/jakeo-dev/" target="_blank" class="link">my LinkedIn</a> or my Discord
            (@jakeybakers) or <a href="mailto:hi@jakeo.dev" target="_blank" class="link">my email</a>.
        </p>

        <h2 class="title2">When Am I?</h2>
        <p>
            It is Saturday, October 11th, 2025 at 10:29 AM PDT as I write this.
        </p>
        <img class="post-image-small" src="/jaxie-rubber-duck.png">
        <p class="subtext1">My cat Jaxie with a rubber duck, on October 11th, 2022.</p>

        <h2 class="title2">Why Am I?</h2>
        <p>
            I don't know.
        </p>

        <h2 class="title2">How Am I?</h2>
        <p>
            Good. 👍
        </p>
        <img class="post-image-small" src="/ocean-sky.png">
        <p class="subtext1">A view of some unremarkable part of the Pacific Ocean.</p>
        `,
  },
  {
    title: "Dialing Letters Instead of Digits",
    date: "August 18th, 2024",
    description:
      "How I improved the code of my vanity phone number generator website, Cifra.",
    image: "/dialing-letters-instead-of-digits.png",
    imageAlt: "Overlapping lists of random words and numbers",
    slug: "dialing-letters-instead-of-digits",
    html: `
    <h2 class="title2">Introduction</h2>
        <p>
            In February 2023, I introduced the first iteration of <a href="https://cifra.jakeo.dev"
                target="_blank">Cifra</a>, my website that generates as many vanity phone numbers that match an inputted
            phone number as fast as possible. Over the past year and a half, I've found different ways to improve the
            efficiency and design of the program. It required a good understanding of how vanity phone numbers work and
            an ample amount of time to remove the inappropriate words from the word list that I found online. Even
            though the code may seem simple, I started with an extremely slow and inefficient method before finding this
            much faster one, which I'll explain here.
        </p>

        <h2 class="title2">Generation Preparation</h2>
        <p>
            The first step in this process is to make the list of over 40,000
            words more manageable. For this specific case, we need to have two
            separate lists/arrays: one containing the words (which we already
            have), and another containing the translation of each word to how
            you would type it in the telephone number keypad.
        </p>
        <p>
            The program will convert each letter of each word to the digits on
            the keypad that they correspond to. In the program, these strings of
            numbers that correspond to a word* are called "numeros." Each numero
            is added to an array called numerosArray.
        </p>
        <p class="subtext1">
            More than one word can share the same numero, but this won't affect
            the program.
        </p>

        <h2 class="title2">Match and Form</h2>
        <p>
            Now that the word list is in a more manageable state, let's start
            forming the vanity numbers. This is the slightly more complicated
            part.
        </p>
        <h3 class="title2-2">Step 1 (one-word vanity numbers)</h3>
        <p>
            First, the program will loop through each numero and check if the
            inputted phone number contains any of the numeros. If it does, it
            will replace that numero in the inputted phone number with the
            corresponding word. Then, it will add that vanity number to an array
            called oneNumsArray.
        </p>
        <p>
            The fixDashes() function removes any duplicate dashes or any
            dashes that are at the very beginning or end of the vanity number
            so that there is only one dash between each position where a
            letter and a digit meet.
        </p>
        </div>
        <p>
            Below is an example of this step. 230-286-6911 is the inputted
            phone number, and while looping through numerosArray, it finds
            that the phone number contains a numero, 28669. It replaces the
            numero in the phone number with the word that the numero
            corresponds to, which is "bunny". It adds this new vanity phone
            number to oneNumsArray.
        </p>
        <p>
            After it finishes looping through each numero, oneNumsArray will be
            filled with every possible one-word vanity number that can be
            derived from the inputted phone number.
        </p>
        <h3 class="title2-2">Step 2 (two-word vanity numbers)</h3>
        <p>
            We don't just want vanity numbers with one word in them when we
            could have more, but repeating this process could slow down the
            program by at least several tens of milliseconds and at most several
            hundred, which equates to several years from a programmer's
            perspective.
        </p>
        <p>
            So, before the process is repeated, the program should do a check to
            see if it's worth it to sacrifice a little more time to attempt to
            generate more vanity numbers.
        </p>
        <ol>
            <li>
                One of the first things to check is if there have even been any
                one-word vanity numbers generated at all from the previous step.
            </li>
            <li>
                Another less obvious thing to check is the digits themselves. On
                the standard telephone keypad, the numbers 0 and 1 don't
                correspond to any letters, so if those are the only digits left on
                all of the previously generated one-word vanity numbers, there's
                no point in trying to find another match with them, since there
                are none that exist. For example, it is impossible to squeeze any
                more words out of the one-word vanity number 10-PLANT-010, since
                there are no corresponding letters for any of the remaining
                digits.
            </li>
            <li>
                Additionally, the shortest word in the program's word list is 3
                letters (apart from a few exceptions).
            </li>
        </ol>
        <p>
            Using these important things to know, I added a statement to check
            the first and last one-word vanity numbers generated for their
            longest strings of consecutive digits from 2 to 9. If that string in
            either one of them has a length greater than 2 (at least 3) and
            there is at least one one-word vanity number generated from before,
            then the program will repeat the same process from the previous
            step, but now on the list of one-word vanity numbers.
        </p>
        <p>
            It will loop through each vanity number in oneNumsArray and each
            numero to check if any of the one-word vanity numbers contain any of
            the numeros. If it does, it will replace that numero in the one-word
            vanity number with the corresponding word. Then, it will add this
            new two-word vanity number to an array called twoNumsArray.
        </p>
        <h3 class="title2-2">Step 3 (three-word vanity numbers)</h3>
        <p>
            The same checks and processes will be repeated one last time to add
            a potential third word to the vanity numbers.
        </p>

        <h2 class="title2" id="reveal-the-numbers">
            Reveal the Numbers
        </h2>
        <p>
            After all of this, we now have three arrays of vanity numbers: one
            array that has numbers with one word, another that has numbers with
            two words, and the last with three words. The program will combine
            all the arrays into one and remove any duplicate vanity numbers. It
            will then display every vanity number in a pseudo-random order,
            generally showing the vanity numbers with more, longer words first.
        </p>
        <p>
            Most ten-digit phone numbers generate all their possible vanity
            numbers in about 30 to 200 milliseconds on average. Is there a more
            efficient way to do this? Almost certainly, but for me, this is fast
            enough.
        </p>

        <h2 class="title2" id="github">
            GitHub
        </h2>
        <p>
            You can find the full code for Cifra
            <a href="https://github.com/jakeo-dev/cifra" target="_blank" class="link">
                on GitHub</a>.
        </p>
        `,
  },
];

export default blogs;

/* const blogContainer = document.getElementById("blog-container");

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
 */
