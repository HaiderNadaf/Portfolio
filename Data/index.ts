// data.ts (or constants/index.ts)
// All className strings are FULLY STATIC → Tailwind JIT / purge should pick them up correctly

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" }, // moved up — more common flow
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize building scalable and robust systems",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I've worked with clients across the globe",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "I constantly expand and improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center text-center sm:text-left",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JavaScript animation library",
    description: "The inside scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "I'm open to new opportunities — let's connect!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Docker Website Clone",
    des: "Pixel-perfect, fully responsive clone of the official Docker website — Next.js, TypeScript, Tailwind CSS.",
    img: "/docker.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://docker-website.vercel.app/",
  },
  {
    id: 2,
    title: "Charity Platform",
    des: "Modern responsive charity site with donation flows, impact stories & stats — Next.js + TypeScript + Tailwind.",
    img: "/charity.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://ngo-project-iota.vercel.app/", // ← rename project or update link if mismatch
  },
  {
    id: 3,
    title: "Travel Explorer",
    des: "Visually rich travel site for effortless destination discovery — Next.js, TypeScript & Tailwind CSS.",
    img: "/map.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://travel-website-one-sigma.vercel.app/", // ← deploy & update this
  },
  {
    id: 4,
    title: "Nike Shoes Clone",
    des: "Modern sneaker e-commerce UI with smooth interactions — React, Tailwind CSS & React Icons.",
    img: "/shoes.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://nike-shoe-omega.vercel.app/",
  },

  {
    id: 5,
    title: "Data Analytics Landing",
    des: "Clean, responsive analytics page focused on growth metrics — React + Tailwind CSS.",
    img: "/growing.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://data-analytics-landing-page-orpin.vercel.app/",
  },

  {
    id: 6,
    title: "Virtual Build Tool",
    des: "Intuitive virtual build environment for developers — React + Tailwind.",
    img: "/virtual.png",
    iconLists: ["/re.svg", "/tail.svg"],
    link: "https://virtual-gray.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Haider demonstrated exceptional skills and made significant contributions. He consistently showed strong work ethic, a positive attitude, and eagerness to learn. A valuable team member — we are confident he will excel in any future role.",
    name: "Manisha Bhale",
    title: "CEO, Technifyworld Techno Solutions",
    img: "/manisha.webp",
  },
  {
    quote:
      "Collaborating with Haider was a pleasure. His professionalism, responsiveness, and dedication to quality stood out throughout the project.",
    name: "Hideki Okamura",
    title: "Senior Full-Stack Developer (Freelancer)",
    img: "/olek.jpg",
  },
  {
    quote:
      "Working with Haider was great — he delivered a complete, high-quality website quickly and reliably as our freelance contractor.",
    name: "Shahnoor Mujawar",
    title: "Co-Founder, RideResale",
    img: "/shahnoor.jpg",
  },
  {
    quote:
      "Haider turned our idea into a solid MVP. His skills, professionalism and dedication contributed immensely to our early success.",
    name: "Ashok",
    title: "Co-Founder, Kitty Bees",
    img: "/ashok.jpg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "OneRoot.Farm",
    desc: "Contributed to a full-featured web platform using React, Node.js, and MongoDB.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Science Intern",
    company: "Nullclass",
    desc: "Designed and built an emotion detection ML model using Python and TensorFlow.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    desc: "Led end-to-end development of multiple web apps for global clients — from concept to production.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Developer & Co-founder",
    company: "Indiflats (Realtek)",
    desc: "Co-founded and led development & maintenance of a real-estate tech startup.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/HaiderNadaf",
  },
  {
    id: 2, // fixed id from 3 → 2 (sequential)
    img: "/link.svg",
    link: "https://www.linkedin.com/in/haider-nadaf-316954313/",
  },
];
