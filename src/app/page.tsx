import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experiences } from "@/components/Experiences";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
    </>
  );
}
