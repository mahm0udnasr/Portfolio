import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // custom CSS variable
});

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Mahmoud Nasr | Full Stack & Next.js Developer",
  description:
    "Mahmoud Nasr is a Full Stack Web Developer, focusing on the MERN Stack and Next.js. develops web applications that are modern, secure, and fast to assist companies in expansion and provide remarkable user experiences.",
  keywords: [
    "Mahmoud Nasr",
    "Full stack Developer",
    "Javascript Developer",
    "Next.js Developer",
    "React Developer",
    "MERN stack",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "Web Developer Egypt",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Freelance Web Developer",
    "Scalable Web Apps",
    "TypeScript",
  ],
  authors: [{ name: "Mahmoud Nasr" }],
  openGraph: {
    title: "Mahmoud Nasr | Full Stack & Next.js Developer",
    description:
      "Building modern, scalable, and high-performance web applications with Next.js, React, and Node.js.",
    url: "https://mahmoudnasr-portfolio.pages.dev/",
    siteName: "Mahmoud Nasr Portfolio",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://mahmoudnasr-portfolio.pages.dev/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${rubik.variable} antialiased`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
