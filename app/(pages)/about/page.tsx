import React from "react";
import { Metadata } from "next";
import HeaderPage from "../components/header";
import { Dna, Earth, Heart, Languages, User } from "lucide-react";
import Title from "../components/title";

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
  return (
    <div className="flex flex-col">
      <HeaderPage
        Icon={User}
        title="Web Developer, Based In Egypt."
        description="I am a Full Stack Web Developer from Egypt, Garbia, Tanta. I'm passionate about crafting web projects and contributing to open-source communities. I specialize in modern JavaScript frameworks and responsive CSS design, focusing on creating pixel-perfect, user-friendly interfaces. With strong attention to detail and efficient delivery, I build seamless web experiences that combine functionality with elegant design."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 mb-16">
        <div className="space-y-4">
          <Title title="Language">
            <Languages />
          </Title>
          <ul className="flex flex-col gap-3 mt-6">
            <li className="list-inside ml-5 text-secondary text-lg marker:text-orange-400">
              Arabic
            </li>
            <li className="list-inside ml-5 text-secondary text-lg marker:text-orange-400">
              English
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <Title title="Nationality">
            <Earth />
          </Title>
          <ul className="mt-6">
            <li className="list-inside ml-5 text-secondary text-lg marker:text-orange-400">
              Egypt
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <Title title="Gender">
            <Dna />
          </Title>
          <ul className="mt-6">
            <li className="list-inside ml-5 text-secondary text-lg marker:text-orange-400">
              Male
            </li>
          </ul>
        </div>
      </div>

      <div className="space-y-2">
        <Title title="Hobbies">
          <Heart />
        </Title>
        <ul className="flex flex-wrap gap-6 mt-6">
          <li className="list-inside ml-5 text-secondary text-lg marker:text-orange-400">
            Coding
          </li>
          <li className="list-inside ml-5 text-secondary text-lg marker:text-orange-400">
            Creating Cool Projects
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
