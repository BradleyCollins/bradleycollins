import type { ImageMetadata } from "astro";
import portfolio from "../assets/bc_port.png";
import jasmine from "../assets/jasmine.png";

export interface Project {
  title: string;
  description: string;
  image: ImageMetadata;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: "This Website!",
    description:
      "My personal site, rebuilt with Astro and Tailwind CSS. The original version was my first real dive into CSS Grid and SCSS.",
    image: portfolio,
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/BradleyCollins/bradleycollins",
  },
  {
    title: "Therapist Site Refresh",
    description:
      "While learning Bootstrap I decided to refresh a friend's professional website. They were using a prebuilt theme that seemed a bit stale and out of date.",
    image: jasmine,
    tags: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/BradleyCollins/jasmine_bootstrap",
    live: "https://bradleycollins.github.io/jasmine_bootstrap/",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/BradleyCollins" },
  { label: "DEV", href: "https://dev.to/bradleycollins" },
  { label: "Twitter", href: "https://twitter.com/b_of_the_rad" },
];
