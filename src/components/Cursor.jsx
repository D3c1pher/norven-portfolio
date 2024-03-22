import { useState, useEffect } from "react";
import { useTheme } from "../ThemeContext";

export default function Cursor() {
  const { theme } = useTheme();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.querySelectorAll('button, a, [data-hoverable="true"]').forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.querySelectorAll('button, a, [data-hoverable="true"]').forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cursorDot = document.querySelector("[data-cursor-dot]");
      const cursorOutline = document.querySelector("[data-cursor-outline]");

      if (cursorDot && cursorOutline) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
          left: `${posX}px`,
          top: `${posY}px`,
        }, { duration: 500, fill: "forwards" });

        if (isHovering) {
          cursorOutline.animate({
            height: "100px",
            width: "100px", 
          }, { duration: 500, fill: "forwards" });
        } else {
          cursorOutline.animate({
            height: "50px",
            width: "50px", 
          }, { duration: 500, fill: "forwards" });
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovering]);

  return (
    <>
      <div
        id="cursor-dot"
        className={`fixed top-0 left-0 w-[10px] h-[10px] ${
          theme === "night" ? "bg-white" : "bg-black"
        } transform -translate-x-1/2 -translate-y-1/2 rounded-full z-50 pointer-events-none`}
        data-cursor-dot
      ></div>
      <div
        id="cursor-outline"
        className={`fixed top-0 left-0 border-2 ${
          theme === "night" ? "border-white" : "border-black"
        } transform -translate-x-1/2 -translate-y-1/2 rounded-full z-50 pointer-events-none`}
        data-cursor-outline
      ></div>
    </>
  );
}