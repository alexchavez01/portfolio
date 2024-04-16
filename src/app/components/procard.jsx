"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./animations/card";
import Link from "next/link";

const Procard = ({ src, title, description }) => {
  return (
    <CardContainer className="flex flex-col items-center justify-center inter-var">
      <CardBody className="transition-shadow duration-300 ease-in-out hover:shadow-2xl relative group/card hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-[25rem] md:max-w-[auto] h-auto rounded-xl p-6 border">
        <div className="flex flex-col items-center justify-center">
          <CardItem
            translateZ="50"
            className="text-lg font-semibold text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-300 text-sm mt-2"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full">
            <img
              src={src}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        <div className="flex justify-between items-center mt-4">
          <CardItem
            translateZ={20}
            as={Link}
            href=""
            target="__blank"
            className="px-4 py-3 rounded-xl text-xs font-bold text-white bg-transparent border border-white hover:bg-white hover:text-green-500 transition-colors duration-200"
          >
            GitHub →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default Procard;
