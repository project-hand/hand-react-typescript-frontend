import { useState } from "react";

export const useToggleSidebar = () => {
  const [stateSidebar, setStateSidebar] = useState(false);
  const [xPosition, setXPosition] = useState(110);

  const toggleSidebar = () => {
    if (xPosition > 0) {
      setXPosition(0);
    } else {
      setXPosition(110);
    }
    setStateSidebar((prev) => !prev);
  };

  return { toggleSidebar, stateSidebar, xPosition };
};