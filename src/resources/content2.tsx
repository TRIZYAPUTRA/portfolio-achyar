import React from "react";

export const person = {
  firstName: "Your",
  lastName: "Name",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Designer / Developer",
  avatar: "/images/avatar.jpg",
  email: "you@example.com",
  location: "Asia/Jakarta",
  languages: ["English"],
  locale: "en",
};

export const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yourname",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:you@example.com",
  },
];

export const newsletter = {
  display: false,
  title: "Newsletter",
  description: "Subscribe to stay updated.",
};

export const home = {
  path: "/",
  label: "Home",
  title: "Your Portfolio",
  description: "Personal portfolio showcasing projects and writing.",
  image: "/images/og/home.jpg",
  headline: <>Designer & Developer building delightful products.</>,
  featured: {
    display: false,
    title: "",
    href: "",
  },
  subline: (
    <>
      Hi — I build interfaces and tools that help teams ship faster.
    </>
  ),
};

export const about = {
  path: "/about",
  label: "About",
  title: "About",
  description: "About me and my work.",
  tableOfContent: { display: true, subItems: true },
  avatar: { display: true },
  calendar: { display: false, link: "" },
  intro: {
    display: true,
    title: "Intro",
    description: (
      <>
        I'm a product-focused designer & engineer working on web interfaces
        and developer tools.
      </>
    ),
  },
  work: { display: false, title: "Work", experiences: [] },
  studies: { display: false, title: "Studies", institutions: [] },
  technical: { display: false, title: "Technical", skills: [] },
};

export const blog = {
  path: "/blog",
  label: "Blog",
  title: "Blog",
  description: "Writing about design and engineering.",
};

export const work = {
  path: "/work",
  label: "Work",
  title: "Work",
  description: "Selected projects and case studies.",
};

export const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: "Gallery",
  description: "A visual collection of work.",
  images: [],
};

export default {};
