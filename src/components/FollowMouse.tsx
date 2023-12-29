import { motion } from "framer-motion";
import useMousePosition from "../utils/useMousePosition";
import { useEffect, useState } from "react";

const FollowMouse = () => {
  const { x, y } = useMousePosition();

  const [isHover, setIsHover] = useState(false);

  //   set hover true when a or button element is hover
  useEffect(() => {
    const a = document.querySelectorAll("a");
    const button = document.querySelectorAll("button");
    a.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        setIsHover(true);
      });
      el.addEventListener("mouseleave", () => {
        setIsHover(false);
      });
    });
    button.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        setIsHover(true);
      });
      el.addEventListener("mouseleave", () => {
        setIsHover(false);
      });
    });
  }, []);

  return (
    <div className="-translate-x-5 -translate-y-5 mix-blend-difference relative z-50">
      <motion.div
        animate={{
          y,
          x,
          scale: isHover ? 3 : 1,
        }}
        transition={{
          ease: "linear",
          duration: 0.1,
        }}
        style={{
          zIndex: 1000,
        }}
        className="mouse size-10  pointer-events-none absolute w-10 h-10 bg-white rounded-full"
      />
    </div>
  );
};

export default FollowMouse;
