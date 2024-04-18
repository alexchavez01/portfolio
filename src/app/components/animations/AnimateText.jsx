"use client";  // Ensures that the code only runs on the client-side in a Next.js application.
import React, { useEffect } from 'react';  // Imports the useEffect hook from React for side effects.
import anime from 'animejs';  // Imports the anime.js library for animation.
import Letterize from "letterizejs";  // Imports the Letterize library for letter-based animations.

const AnimateText = () => {
  useEffect(() => {
    // Initializes Letterize on elements with the class "animate-me" which splits text into spans.
    const test = new Letterize({
      targets: ".animate-me",
    });

    // Creates a timeline for animation using anime.js targeted at the letters created by Letterize.
    const animation = anime.timeline({
      targets: test.listAll,  // Targets all letter elements created by Letterize.
      delay: anime.stagger(50, {  // Staggers the start of animations for each letter.
        grid: [test.list[0].length, test.list.length],  // Sets up a grid based on the number of letters.
        from: "center",  // Starts the animation from the center of the grid.
      }),
      loop: true,  // Makes the animation loop indefinitely.
    });

    // Defines various animation states within the timeline.
    animation
      .add({
        scale: 0.5,  // First state: scales the letters to half size.
      })
      .add({
        letterSpacing: "11px",  // Second state: increases letter spacing.
      })
      .add({
        scale: 1.2,  // Third state: scales the letters slightly larger than normal.
      })
      .add({
        letterSpacing: "7px",  // Fourth state: reduces letter spacing.
      });
  }, []);  // Empty dependency array means this effect runs once on mount, similar to componentDidMount.

  return (
    <div>
      <div className="animate-me">
        Contact  
      </div>

      <div className="animate-me">
        Me!  
      </div>

    </div>
  );
};
export default AnimateText;  // Exports the AnimateText component for use elsewhere in the application.
