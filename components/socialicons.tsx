import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import Icons from "./icon";

const allIcons = [
  {
    icon: <Facebook color="#fff" key={1} />,
    link: "https://www.facebook.com/mhm0udnasr",
    title: "Facebook",
  },
  {
    icon: <Twitter color="#fff" key={2} />,
    link: "https://x.com/_mahm0udnasr",
    title: "Twitter",
  },
  {
    icon: <Linkedin color="#fff" key={3} />,
    link: "https://www.linkedin.com/in/mahm0udnasr",
    title: "LinkedIn",
  },
  {
    icon: <Github color="#fff" key={4} />,
    link: "https://github.com/mahm0udnasr",
    title: "Github",
  },
];
export default function SocialIcons() {
  return (
    <div className="flex gap-6 justify-center items-center">
      {allIcons.map(({ icon, link, title }, index) => (
        <Icons key={index} link={link} title={title}>
          {icon}
        </Icons>
      ))}
    </div>
  );
}
