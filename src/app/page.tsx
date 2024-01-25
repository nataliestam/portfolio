import Link from "next/link";
import type { ReactNode } from "react";

const Section = ({ id, header, children }: { id: string; header: string; children: ReactNode }) => (
  <div id={id} className="h-screen flex flex-col justify-center">
    <h2 className="text-6xl">{header}</h2>
    <div className="flex flex-col gap-4">
      {children}
    </div>
  </div>
);


const Page = () => (
  <>
    <Section id="about" header="👩🏻‍💻hi, i&apos;m natalie.">
      <p>i&apos;m a full-stack engineer based in oakland, california.</p>
    </Section>
    <Section id="resume" header="resume">
      <p>currently, i&apos;m a senior front-end engineer at<Link href="https://www.brex.com" target="_blank" className='inline-link'>Brex</Link>, where i own design systems for the Brex product and website.</p>
      <p>previously, i was an early engineer and engineering manager at <Link href="https://ironcladapp.com/" target="_blank" className='inline-link'>Ironclad</Link>, where i built <Link href="https://ironcladapp.com/product/workflow-designer/" target='_black' className='inline-link'>Workflow Designer</Link>.</p>
      <p>in my free time, i like to cook 🍜, knit 🧶, and play video games 🎮.</p>
      <p>download my resume <Link href="/NatalieStam_Resume.pdf" target="_blank" rel="noopener noreferrer" className='inline-link'>here</Link>.</p>
    </Section>
    <Section id="contact" header="contact me">
      <p>want to chat? send me at email at <Link href="mailto:hi@nataliestam.com" className='inline-link'>hi@nataliestam.com</Link> or connect with me on <Link href="https://www.linkedin.com/in/nataliestam/" target="_blank" className='inline-link'>linkedin</Link>.</p>
    </Section>
  </>
);

export default Page;