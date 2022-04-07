import { useState, useEffect } from "react";
import throttle from "lodash.throttle";
import CONFIG from "../config";

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = throttle(() => {
      setWidth(window.innerWidth);
    }, CONFIG.THROTTLE);

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}
