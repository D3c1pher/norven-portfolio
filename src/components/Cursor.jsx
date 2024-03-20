import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

export default function Cursor() {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Adjust throttle time as needed
    const throttledMouseMove = throttle(handleMouseMove, 16);

    window.addEventListener("mousemove", throttledMouseMove);

    return () => {
      window.removeEventListener("mousemove", throttledMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={`cursor bg-transparent w-12 h-12 rounded-full border-2 fixed z-50 hidden lg:block ${theme === "night" ? "border-white" : "border-black"}`}
      style={{ left: position.x, top: position.y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
}

// Throttle function to limit the frequency of function calls
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
    }
  };
}