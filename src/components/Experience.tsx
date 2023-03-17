import { Gltf, OrbitControls, ScrollControls, Sky, Stars, useScroll } from "@react-three/drei";
import { Overlay } from "./Section";
import { MoonModel } from "../assets/models/Moon";
import { Office } from "./Office";
import { Model } from "./Planets";
import { Coffee } from "./Coffee_mug";
import { Phone } from "./Phone";
import {
  SheetProvider,
  PerspectiveCamera,
  useCurrentSheet,
} from "@theatre/r3f";
import { useFrame } from "@react-three/fiber";
import { getProject, val } from "@theatre/core";
import { MacBook } from "./Macbook";
export const Experience = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  if (!sheet) return <></>;

  return (
    <>
      <ScrollControls pages={3} damping={0.25}>
       <Scene />
      </ScrollControls>
    </>
  );
};


const Scene = () => {

    const sheet = useCurrentSheet();
    const scroll = useScroll();
    if (!sheet) return <></>;
  
    // our callback will run on every animation frame
    useFrame(() => {
      // the length of our sequence
      const sequenceLength = val(sheet.sequence.pointer.length);
      // update the "position" of the playhead in the sequence, as a fraction of its whole length
       sheet.sequence.position = scroll.offset * sequenceLength;
    });
  
    const bgColor = "black";
  
    return (
      <>
        <ambientLight intensity={1} />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} />
        <Overlay />
        <MacBook/>
        <Coffee/>
        <Phone/>
        <PerspectiveCamera
                theatreKey="Camera"
                makeDefault
                position={[0, 0, 0]}
                fov={90}
                near={0.1}
                far={70} attachArray={undefined} attachObject={undefined} attachFns={undefined}        />
      </>
    );
}

