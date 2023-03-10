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
  // canScroll is used to prevent multiple scrolls from happening at once
  const [canScroll, setCanScroll] = useState(true);

  // handleSingleScroll is called on every scroll event
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

  // timerHandle is called after timeout is reached
  const timerHandle = () => {
    setCanScroll(true);
  };

  // if canScroll is false, set it to true after timeout
  useEffect(() => {
    if (!canScroll) {
      setTimeout(timerHandle, timeout);
    }
  }, [canScroll]);

  // add event listener for scroll
  useEffect(() => {
    window.addEventListener("wheel", handleSingleScroll);
    return () => {
      window.removeEventListener("wheel", handleSingleScroll);
    };
  }, [timeout]);
}
