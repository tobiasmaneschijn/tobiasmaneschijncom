import { useEffect, useState } from "react";
import { SwipeableHandlers, useSwipeable } from "react-swipeable";
import { useScrollHandler } from "./useScrollHandler";

export function usePageNavigation(): [
  currentPage: number,
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>,
  handlers: SwipeableHandlers
] {
  const [currentPage, setCurrentPage] = useState(0);

  const handlers = useSwipeable({
    onSwipedUp: () => handleRightArrowPress(),
    onSwipedDown: () => handleLeftArrowPress(),
    preventScrollOnSwipe: false,
  });

/hallo/

  // increment page number on right arrow press
  const handleRightArrowPress = () => {
    console.log("Right Arrow");
    if (currentPage < 3) {
      console.log(currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  // decrement page number on left arrow press
  const handleLeftArrowPress = () => {
    console.log("Left Arrow");
    if (currentPage > 0) {
      console.log(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  // handle key presses
  const handleKeyPress = (event: any) => {
    if (event.key === "ArrowRight") {
      handleRightArrowPress();
    } else if (event.key === "ArrowLeft") {
      handleLeftArrowPress();
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
