import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/navbar";

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
  metadataBase: new URL("https://mahmoudnasr-portfolio.pages.dev"),
  title: {
    default: "Mahmoud Nasr | Full Stack & Next.js Developer Portfolio",
    template: "%s | Mahmoud Nasr",
  },
  description:
    "Mahmoud Nasr is a Full Stack Web Developer specializing in MERN Stack and Next.js. Building modern, secure, and fast web applications to help companies scale and deliver exceptional user experiences. Available for freelance projects.",
  keywords: [
    "Mahmoud Nasr",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "MERN Stack Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Express.js",
    "MongoDB Developer",
    "PostgreSQL",
    "SQL Developer",
    "Web Developer Egypt",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Freelance Web Developer",
    "Scalable Web Applications",
    "Modern Web Development",
    "Full Stack Engineer",
    "React.js Expert",
    "Web Application Development",
    "Responsive Web Design",
    "API Development",
    "Database Design",
  ],
  authors: [
    { name: "Mahmoud Nasr", url: "https://mahmoudnasr-portfolio.pages.dev" },
  ],
  creator: "Mahmoud Nasr",
  publisher: "Mahmoud Nasr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mahmoud Nasr | Full Stack & Next.js Developer Portfolio",
    description:
      "Building modern, scalable, and high-performance web applications with Next.js, React, and Node.js. Expert in MERN Stack development.",
    url: "https://mahmoudnasr-portfolio.pages.dev",
    siteName: "Mahmoud Nasr Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mahmoud Nasr - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Nasr | Full Stack & Next.js Developer",
    description:
      "Building modern, scalable web applications with Next.js, React, and Node.js",
    creator: "@mahmoudnasr",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mahmoudnasr-portfolio.pages.dev",
  },
  verification: {
    google: "tHxcfDHkzW8aoGdc5NLqL0_4GxUU4kliU4YzVsCKi3c",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mahmoud Nasr",
    url: "https://mahmoudnasr-portfolio.pages.dev",
    jobTitle: "Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in MERN Stack and Next.js",
    sameAs: [
      "https://github.com/mahm0udnasr",
      "https://linkedin.com/in/mahmoudnasr",
    ],
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Express.js",
      "Full Stack Development",
      "Web Development",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Your University/Education",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${rubik.variable} pixel-gradient-bg`}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
