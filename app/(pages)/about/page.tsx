import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Mahmoud Nasr, a passionate Full Stack Developer specializing in MERN Stack and Next.js. Discover my journey, skills, and commitment to building exceptional web applications.",
  openGraph: {
    title: "About Mahmoud Nasr | Full Stack Developer",
    description:
      "Learn more about my journey as a Full Stack Developer and my expertise in modern web technologies.",
    url: "https://mahmoudnasr-portfolio.pages.dev/about",
  },
};

const AboutPage = () => {
  return <div>AboutPage</div>;
};

export default AboutPage;
