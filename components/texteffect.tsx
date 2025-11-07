"use client";
import { TypeAnimation } from "react-type-animation";

export default function TextEffect() {
  return (
    <TypeAnimation
      sequence={["Next.js Developer", 1000, "MERN Stack Developer", 1000]}
      wrapper="span"
      speed={25}
      repeat={Infinity}
    />
  );
}
