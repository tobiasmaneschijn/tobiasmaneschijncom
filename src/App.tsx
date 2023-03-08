import { useEffect, useState } from "react";
import { Pagination } from "./pages/Pagination";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#9B5DE5");

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
    window.addEventListener("keydown", handleKeyPress);
    updateBackground();
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentPage]);

  return (
    <div
      className={`gap-4 h-screen w-full m-0 flex flex-col text-white duration-300 transition-colors items-center justify-center`}
      style={{ backgroundColor: backgroundColor }}
    >
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
