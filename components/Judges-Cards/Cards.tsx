"use client";

import React, { useState } from "react";

type CardProps = {
  frame?: string;
};

function Cards({ frame = "/cyan-card.png" }: CardProps) {
  return (
    <div
      className="w-[252px] h-[193px] overflow-hidden">
      <div
        className={`w-full h-full bg-center bg-no-repeat`}>
        {/*<div className="absolute inset-0 w-full h-full">*/}
          <div
            className="w-full h-full bg-center bg-no-repeat bg-contain flex flex-col items-center justify-center px-4"
            style={{ backgroundImage: `url(${frame})`, backgroundSize:"100% 100%" }}

          >
          </div>
        {/*</div>*/}
      </div>
    </div>
  );
}

export default Cards;