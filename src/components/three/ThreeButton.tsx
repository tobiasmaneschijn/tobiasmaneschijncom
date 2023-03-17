import { useEffect, useState } from "react";
import { Canvas, Euler, extend } from "@react-three/fiber";
import { MoonModel } from "../../assets/models/Moon";
import * as THREE from "three";
import { Bounds, PresentationControls, Shadow, Stage } from "@react-three/drei";

// A button using Three react fiber to show a 3D button with 3d text
const ThreeButton = () => {
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);



 
  return (
    <Canvas className="h-full overflow-visible">
      <PresentationControls
    
  enabled={true} // the controls can be disabled by setting this to false
  global={false} // Spin globally or by dragging the model
  cursor={true} // Whether to toggle cursor style on drag
  snap={true} // Snap-back to center (can also be a spring config)
  rotation={[0, 4.4, 0]} // Default rotation
  zoom={1} // Default zoom
  config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
>
<Bounds fit clip observe damping={2} margin={3} >
  <Stage environment="city" intensity={1} adjustCamera={false} castShadow={false}>

        <MoonModel />
        </Stage>
</Bounds>
</PresentationControls>
    </Canvas>
  );
};

export default ThreeButton;
