import { Cta } from "@/components/sections/Cta";
import { FilmStrip } from "@/components/sections/FilmStrip";
import { Hero } from "@/components/sections/Hero";
import { Packages } from "@/components/sections/Packages";
import { Process } from "@/components/sections/Process";
import { Statement } from "@/components/sections/Statement";
import { Team } from "@/components/sections/Team";
import { Works } from "@/components/sections/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <FilmStrip />
      <Statement />
      <Works />
      <Process />
      <Team />
      <Packages />
      <Cta />
    </>
  );
}
