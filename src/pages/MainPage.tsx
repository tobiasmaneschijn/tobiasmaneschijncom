import { Canvas, context } from "@react-three/fiber";
import { getProject } from "@theatre/core";
import { SheetProvider } from "@theatre/r3f";
import { Experience } from "../components/Experience";
import animationStateMobile from "../assets/animations/m-experience.json"
import { useResponsive } from "../hooks/useResponsive";
import { useEffect, useState } from "react";



export function MainPage() {
  const isMobile = useResponsive();
  const mobileSheet = getProject("Experience", { state: animationStateMobile }).sheet("Mobile Experience");
  const desktopSheet = getProject("Experience", { state: animationStateMobile }).sheet("Experience Sheet");
  
  const [sheet, setSheet] = useState(mobileSheet)

  useEffect(() => {
    if (isMobile) {
      setSheet(mobileSheet)
    } else {
      setSheet(desktopSheet)
    }
    console.log("isMobile", isMobile)
  }, [isMobile])

  return (
    <div className="w-screen h-screen "> 
   
      <Canvas
      
       className="w-screen h-screen fade2-in"
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 90,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <SheetProvider sheet={sheet}>
          <Experience />
        </SheetProvider>
      </Canvas>   
      </div>
  );
}
