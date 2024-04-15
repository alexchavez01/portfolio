"use client";

import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import Image from "next/image";

// Create a context to manage mouse enter state across components
const MouseEnterContext = createContext(null);

// A container component that adjusts its children's 3D rotation based on mouse movement
export const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);  // Reference to the container DOM element
  const [isMouseEntered, setIsMouseEntered] = useState(false);  // State to track mouse hover

  const handleMouseInteraction = (event, enter) => {
    if (!containerRef.current) return;  // Exit if no reference is found
    if (enter) {
      setIsMouseEntered(true);  // Set hover state to true when mouse enters
    } else {
      setIsMouseEntered(false);  // Set hover state to false when mouse leaves
      containerRef.current.style.transform = 'rotateY(0deg) rotateX(0deg)';  // Reset rotation when mouse leaves
    }

    // Calculate and apply 3D rotation based on mouse position within the element
    if (event.type === 'mousemove') {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (event.clientX - left - width / 2) / 25;
      const y = (event.clientY - top - height / 2) / 25;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
  };

  // Component setup with appropriate styling and event handlers for mouse interactions
  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={("py-20 flex items-center justify-center", containerClassName)} style={{ perspective: "1000px" }}>
        <div ref={containerRef} onMouseEnter={(e) => handleMouseInteraction(e, true)}
             onMouseMove={handleMouseInteraction}
             onMouseLeave={(e) => handleMouseInteraction(e, false)}
             className={("flex items-center justify-center relative transition-all duration-300 ease-linear", className)}
             style={{ transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

// Simple component for wrapping children with a defined 3D transformation style
export const CardBody = ({ children, className }) => (
  <div className={("h-50 w-50 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>
    {children}
  </div>
);

// Component to apply transformations based on mouse hover state
export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  //translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  // Adjust transformations based on hover state using useEffect
  useEffect(() => {
    if (!ref.current) return;
    // Apply or reset rotation based on hover state
    ref.current.style.transform = isMouseEntered
      ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
      : 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
  }, [isMouseEntered, rotateX, rotateY, rotateZ]);

  // Render the component with dynamic tag, styling, and children
  return (
    <Tag ref={ref} className={("w-fit transition duration-200 ease-linear", className)} {...rest}>
      {children}
    </Tag>
  );
};

// Hook to access and enforce the context for mouse enter state
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
