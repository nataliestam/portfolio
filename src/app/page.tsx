import Link from "next/link";
import type { ReactNode } from "react";

const Section = ({
  id,
  header,
  children,
}: {
  id: string;
  header: string;
  children: ReactNode;
}) => (
  <div id={id} className="h-screen flex flex-col justify-center">
    <h2 className="text-6xl">{header}</h2>
    <div className="flex flex-col gap-4">{children}</div>
  </div>
);

const Page = () => (
  <>
    <Section id="about" header="👩🏻‍💻 hi, i'm natalie.">
      <p>i&apos;m a product engineer based in oakland, california.</p>
    </Section>
    <Section id="resume" header="resume">
      <p>
        currently, i&apos;m a senior software engineer at{" "}
        <Link
          href="https://stytch.com/"
          target="_blank"
          className="inline-link"
        >
          Stytch
        </Link>
        , where i own{" "}
        <Link
          href="https://stytch.com/"
          target="_blank"
          className="inline-link"
        >
          stytch.com
        </Link>
        ,{" "}
        <Link
          href="https://stytch.com/docs"
          target="_blank"
          className="inline-link"
        >
          Stytch docs
        </Link>
        , and the developer dashboard.
      </p>
      <p>
        previously, i was a senior frontend engineer at{" "}
        <Link
          href="https://www.brex.com"
          target="_blank"
          className="inline-link"
        >
          Brex
        </Link>
        , where i built design systems for the Brex product and website.
      </p>
      <p>
        before that, i was an early engineer and engineering manager at{" "}
        <Link
          href="https://ironcladapp.com/"
          target="_blank"
          className="inline-link"
        >
          Ironclad
        </Link>
        , where i built{" "}
        <Link
          href="https://ironcladapp.com/product/workflow-designer/"
          target="_black"
          className="inline-link"
        >
          Workflow Designer
        </Link>
        .
      </p>
      <p>i mostly work with react, typescript, and node.</p>
      <p>
        in my free time, i like to cook 🍜, knit 🧶, and play video games 🎮.
      </p>
      <p>
        download my resume{" "}
        <Link
          href="/NatalieStam_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-link"
        >
          here
        </Link>
        .
      </p>
    </Section>
    <Section id="contact" header="contact me">
      <p>
        want to chat? send me at email at{" "}
        <Link href="mailto:hi@nataliestam.com" className="inline-link">
          hi@nataliestam.com
        </Link>{" "}
        or connect with me on{" "}
        <Link
          href="https://www.linkedin.com/in/nataliestam/"
          target="_blank"
          className="inline-link"
        >
          linkedin
        </Link>
        .
      </p>
    </Section>
  </>
);

export default Page;
