import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { ReactNode, useState } from "react";
import { useResponsive } from "../hooks/useResponsive";
import { Socials } from "../pages/introduction/SocialsPage";

interface SectionProps {
  right?: boolean;
  opacity?: number;
  children?: ReactNode;
}

export function Section(props: SectionProps) {
  const isMobile = useResponsive();
  return (
    <section
      className={`h-screen flex flex-col justify-center p-2 ${props.right ? "items-end" : "items-start"} max-md:items-center `}
      style={{
        opacity:  props.opacity,
      }}
    >
      <div className={`max-md:h-full max-md:w-full max-md:items-end w-1/2 items-start  flex justify-center `}>
        <div className={`max-w-lg max-md:max-w-full md:mx-16 w-full`}>
          <div className="bg-white bg-opacity-95  shadow-md rounded-lg  px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
}


export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="w-screen text-black  text-center gap-4">
        <Section opacity={ opacityFirstSection}>
          <h1 className="font-semibold  text-2xl">
            Hello there, I'm <span className="text-blue-500">Tobias</span>
          </h1>
          <p className="text-gray-500">
            I am a software developer from Denmark.
          </p>
          <p className="mt-3 text-2xl font-semibold">
            I love to
          </p>
          <p>
              ↓
            </p>
          <ul className="leading-10">
           
            <li>
              <span className="text-blue-500">Solve</span> problems
            </li>
            <li>
              <span> <span className="text-blue-500">Build</span> solutions</span>
            </li>
            <li>
              <span className="text-blue-500">Design</span> software
            </li>
            <li>
              <span className="text-blue-500">Code</span> things
            </li>
            <li>
              <span className="text-blue-500">Expand</span> my skillset  <span className="text-blue-500"></span>
            </li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold text-2xl">
            I am a <span
              className="text-blue-500">full-stack </span> developer
          </h1>
          <p className="text-gray-500">
            I have experience with a wide range of technologies and frameworks.
          </p>

          <p className="mt-3">
            <h2 className="text-xl font-bold 
        text-blue-500
            ">Frameworks</h2>
          </p>
          <ul className="leading-9">
            <li>React · NextJS </li>
            <li>Expo · React Native · Android Native · Jetpack Compose · Flutter · SwiftUI</li>
            <li>.NET · ASP.NET · MAUI</li>
            <li>Unity · Unreal Engine</li>
          </ul>
          <p className="mt-3">
            <h2 className="text-xl font-bold text-blue-500">Languages</h2>
          </p>
          <ul className="leading-9">
            <li>C · C++ · C#</li>
            <li> JS/TS · HTML/CSS </li>
            <li>Java · Kotlin · Dart</li>
            <li>Python · PHP · SQL</li>
            <li> Swift </li>
          </ul>

          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold text-2xl">
            <span className="text-blue-500">Call me</span>  maybe?
            
          </h1>
          <p className="text-gray-500">
            Let's talk. I'm always open for new opportunities.
          </p>
          <p className="mt-6 p-3 rounded-lg shadow-md">
            <a href="tel:(+45) 21 22 98 30">+45 21 22 98 30</a>
          </p>
          <p className="mt-6 p-3 rounded-lg shadow-md">
            <a href="mailto:s205422@dtu.com">tfrom222@gmail.com</a>
          </p>
          <div className="mt-6 p-3">
          <Socials></Socials>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

