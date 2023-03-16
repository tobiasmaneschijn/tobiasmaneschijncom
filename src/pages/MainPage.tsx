import { Canvas } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import { Experience } from "../components/Experience";
import animationState from "../assets/animations/experience.json"

export function MainPage() {
  const sheet = getProject("Experience", {state: animationState}).sheet("Experience Sheet");
  return (
    <Canvas
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 64,
        position: [2.3, 1.5, 2.3],
      }}
    >
        <SheetProvider sheet={sheet}>

      <Experience />
      </SheetProvider>
    </Canvas>
  );
}
