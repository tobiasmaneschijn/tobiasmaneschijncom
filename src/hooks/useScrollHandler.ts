import { useEffect, useState } from "react";


/**
 * @todo Does not work currently. Need to fix.
 * @param onScrollUp callback for scroll up
 * @param onScrollDown callback for scroll down
 * @param timeout time in ms to wait before allowing another scroll
 */
export function useScrollHandler(
  onScrollUp: () => void,
  onScrollDown: () => void,
  timeout: number = 1000
) {
  const [canScroll, setCanScroll] = useState(true);

  const handleSingleScroll = (event: any) => {
    // only run once per scroll
    if (!canScroll) {
      return;
    }
    if (event.deltaY > 0) {
      onScrollUp();
    } else {
      onScrollDown();
    }
    setCanScroll(false);
  };

  const timerHandle = () => {
    setCanScroll(true);
  };

  // set canScroll to false after timeout
  useEffect(() => {
    if (!canScroll) {
      setTimeout(timerHandle, timeout);
    }
  }, [canScroll]);

  // bind singleScroll to window
  useEffect(() => {
    window.addEventListener("wheel", handleSingleScroll);
    return () => {
      window.removeEventListener("wheel", handleSingleScroll);
    };
  }, [timeout]);
}
