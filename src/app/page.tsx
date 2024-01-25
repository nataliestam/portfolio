import type { ReactNode } from 'react';

const Section = ({ id, header, children }: { id: string; header: string; children: ReactNode }) => (
  <div id={id} className="h-screen flex flex-col justify-center">
    <h2 className="text-6xl">{header}</h2>
    {children}
  </div>
);


const Page = () => (
  <>
    <Section id="about" header="👩🏻‍💻hi, i&apos;m natalie.">
      <p>i&apos;m a full-stack engineer based in oakland, california.</p>
    </Section>
    <Section id="resume" header="resume">
      <p>coming soon.</p>
    </Section>
    <Section id="contact" header="contact me">
      <p>coming soon.</p>
    </Section>
  </>
);

export default Page;