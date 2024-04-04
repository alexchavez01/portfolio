"use client";
import React, { useEffect } from 'react';
import anime from 'animejs';
import Letterize from "letterizejs"

    const ChangText = () => {
        useEffect(() => {
            const test = new Letterize({
                targets: "#animateMe"
            });

            const animation = anime.timeline({
                targets: test.listAll,
                delay: anime.stagger(50),
                loop: true,
            });

            animation
            .add({
                translateY: -40
            })
            .add({
                translateY: 40})
            }), [];



            return (
                <div>
                    <div id="animateMe">
                      About
                    </div>
                </div>
                

            );
    };

    export default ChangText;