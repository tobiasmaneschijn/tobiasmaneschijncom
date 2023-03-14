import { Canvas } from "@react-three/fiber";
import Section from "../components/Section";
import Blob from "../components/three/Blob";
import { Box } from "../components/three/Box";
import ThreeButton from "../components/three/ThreeButton";
import MoonButton from "../components/three/ThreeButton";

export function MainPage() {
  return (
    <div className="w-full h-full flex flex-col text-center gap-4">
      <h1 className="text-3xl font-bold p-8">Tobias Maneschijn</h1>
    <Section model={<ThreeButton/>} modelPlacement="right">
      <Section.Title>Hi, I'm Tobias</Section.Title>
      <Section.Description>
        I'm a software engineering student looking for an internship this fall.
      </Section.Description>
   
    </Section>

    <Section model={<ThreeButton/>}  modelPlacement="left">
      <Section.Title>Hi, I'm Tobias</Section.Title>
      <Section.Description>
        I'm a software engineering student looking for an internship this fall.
      </Section.Description>
    </Section>
    </div>
  );
}

