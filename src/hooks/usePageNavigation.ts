import { useEffect, useState } from "react";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { useMyContext } from "./useMyContext";

export function usePageNavigation(): [
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  handlers: SwipeableHandlers
] {
  const [currentPage, setCurrentPage] = useState(0);
  const context = useMyContext();
  const handlers = useSwipeable({
    onSwipedUp: () => handleRightArrowPress(),
    onSwipedDown: () => handleLeftArrowPress(),
    preventScrollOnSwipe: false,
  });

  // increment page number on right arrow press
  const handleRightArrowPress = () => {
    if (currentPage < 3 && context.showIntroduction) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage > 3 && context.showIntroduction) {
      context.setShowIntroduction(false);
    }
  };

  // decrement page number on left arrow press
  const handleLeftArrowPress = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // handle key presses
  const handleKeyPress = (event: any) => {
    if (event.key === "ArrowRight") {
      handleRightArrowPress();
    } else if (event.key === "ArrowLeft") {
      handleLeftArrowPress();
    } else if (event.key === "r") {
     // context.setShowIntroduction(true);
     // setCurrentPage(0);
    }
  };

  // add event listener for key presses using useEffect
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentPage]);

  //useScrollHandler(handleRightArrowPress, handleLeftArrowPress);

  return [currentPage, setCurrentPage, handlers];
}
