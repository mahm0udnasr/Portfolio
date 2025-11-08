import AvailableForWork from "@/components/AvailableForWork";
import SocialIcons from "@/components/socialicons";
import TextEffect from "@/components/texteffect";
import { Download } from "lucide-react";

export default function Home() {
  return (
    <main className="pixel-gradient-bg">
      <div className="h-screen w-auto flex flex-col justify-center items-center gap-4">
        <AvailableForWork />
        <h3 className="text-white font-poppins text-2xl max-sm:text-xl">
          My Name Is
        </h3>
        <h1 className="block text-white font-rubik text-8xl max-sm:text-4xl">
          MahmoudNasr<span className="font-poppins text-orange-500">.</span>
        </h1>
        <div className="py-4 rounded-md flex flex-col justify-center items-center overflow-hidden">
          <div className="font-poppins text-base sm:text-2xl max-sm:flex max-sm:flex-col text-balance text-gray-400">
            I am a Freelancer &{" "}
            <span className="font-rubik text-lg sm:text-3xl leading-tight text-orange-500">
              <TextEffect />
            </span>
          </div>
        </div>
        <SocialIcons />
        <div className="flex flex-wrap gap-4 mt-6 justify-center items-center">
          {/* Hire Me Button */}
          <a
            href="https://wa.me/+201289950555"
            target="_blank"
            className="group relative max-sm:w-full max-sm:mx-7 inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-orange-500 transition-all duration-300 ease-out border-2 border-orange-500 rounded-lg bg-transparent hover:bg-orange-500 hover:text-black hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hire Me
            </span>
          </a>

          {/* Download Resume Button */}
          <a
            href="/Mahmoud Nasr _Front-end Developer _resume.pdf"
            download={true}
            className="group relative max-sm:w-full max-sm:mx-7 inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-black bg-orange-500 rounded-lg transition-all duration-300 ease-out hover:bg-transparent hover:text-orange-500 border-2 border-orange-500 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] active:scale-95 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
