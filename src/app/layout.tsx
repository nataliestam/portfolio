import "./globals.css";
import { Cantarell, Dawning_of_a_New_Day } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
import type { Metadata } from "next";

const cantarell = Cantarell({ weight: "400", subsets: ["latin"] });
const dawningOfANewDay = Dawning_of_a_New_Day({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "natalie stam",
  description: "natalie stam's portfolio and resume",
  themeColor: "#E8EDDF",
};

const ContactIcons = () => (
  <>
    <Link
      target="_blank"
      href="https://github.com/nataliestam"
      aria-label="natalie's github"
    >
      <FaGithub />
    </Link>
    <Link
      target="_blank"
      href="https://www.linkedin.com/in/nataliestam/"
      aria-label="natalie's linkedin"
    >
      <FaLinkedin />
    </Link>
  </>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body
        className={`${cantarell.className} flex items-center h-full bg-off-white text-dark-green`}
      >
        <nav className="fixed flex flex-col justify-between  w-64 h-full transition-transform -translate-x-full sm:translate-x-0 p-8 bg-dark-green text-off-white">
          <div className="flex flex-col gap-4">
            <Link href="#about">
              <h1 className={`${dawningOfANewDay.className} text-4xl`}>
                natalie stam
              </h1>
            </Link>
            <Link href="#about">about me</Link>
            <Link href="#resume">resume</Link>
            <Link href="#contact">contact</Link>
          </div>
          <footer className="flex gap-4">
            <ContactIcons />
          </footer>
        </nav>
        <main className="h-full w-full sm:ml-64">
          <nav className="flex sm:hidden justify-end fixed top-0 right-0 gap-2 p-4">
            <ContactIcons />
          </nav>
          <div className="px-16">{children}</div>
        </main>
      </body>
    </html>
  );
}
