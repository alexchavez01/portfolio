"use client";
import React, { useEffect } from 'react';
import anime from 'animejs';
import Letterize from "letterizejs"


const AnimateText = () => {
  useEffect(() => {
      const test = new Letterize({
        targets: ".animate-me",
      });

      const animation = anime.timeline({
        targets: test.listAll,
        delay: anime.stagger(50, {
          grid: [test.list[0].length, test.list.length],
          from: "center",
        }),
        loop: true,
      });

      animation
        .add({
          scale: 0.5,
        })
        .add({
          letterSpacing: "11px",
   
        })
        .add({
          scale: 1.2,

        })
        .add({
          letterSpacing: "7px",
        })
    });
    []; // Empty dependency array means this effect runs once on mount

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
export default AnimateText;

