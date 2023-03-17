import { ReactNode, useContext, useEffect, useState } from "react";
import { Pagination as Introduction } from "./pages/introduction/Pagination";
import { useSwipeable } from "react-swipeable";
import { usePageNavigation } from "./hooks/usePageNavigation";
import { MyContext } from "./context/MyContext";
import { useInitializeContext, useMyContext } from "./hooks/useMyContext";
import { MainPage } from "./pages/MainPage";
import { animated, useTransition } from "react-spring";


export function AppWrapper() {
  const contextValue = useInitializeContext();
  return (
    <MyContext.Provider value={contextValue}>
      <App />
    </MyContext.Provider>
  );
}

function App() {




  const context = useMyContext();
  const [backgroundColor, setBackgroundColor] = useState("#9B5DE5");
  const [currentPage, setCurrentPage, handlers] = usePageNavigation();

  const updateBackground = () => {
    let color = "";
    switch (currentPage) {
      case 0:
        color = "#9B5DE5";
        break;

      case 1:
        color = "#F15BB5";
        break;

      case 2:
        color = "#FEE440";
        break;

      case 3:
        color = "#00BBF9";
        break;
      case 4:
        color = "#00BBF9";
        break;

      case 5:
        color = "#00BBF9";
        break;
    }
    setBackgroundColor(color);
  };

  // add event listener for key presses using useEffect
  useEffect(() => {
    updateBackground();
  }, [currentPage]);

  return (
    <div className="h-screen w-full m-0 overflow-hidden">
      <div
        className={`gap-4 h-screen w-full m-0 flex flex-col text-white duration-300 transition-all items-center justify-center overflow-hidden fade2-in ${context.showIntroduction ? "" : "bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] "}}`}
        style={{ backgroundColor: backgroundColor }}
        {...handlers}
      >
        {context.showIntroduction ? (
          <Introduction
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        ) : (
          <MainPage />
        )}
      </div>
    </div>
  );
}

// take childen as a prop
const transitionDiv = ({ children }:
  { children: ReactNode }
) => {
  const context = useMyContext();
  const [transitions, api] = useTransition(context.showIntroduction, () => ({
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
  }))

  return (
    <>{transitions((style, item) => <animated.div style={style} >
      {children}
    </animated.div>)}
    </>
  )
}


export default App;
