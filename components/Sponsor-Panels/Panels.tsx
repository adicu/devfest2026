"use client";

import React, { useState } from "react";

type PanelProps = {
  frame: string;
  logos: string[];
};

function Panels({ frame, logos }: PanelProps) {
    return (
        <div
      className="
        w-[800px]
        h-[180px]
        bg-no-repeat 
        bg-center 
        bg-contain 
        flex 
        items-center 
        justify-center 
        mx-auto
      "
      style={{
        backgroundImage: `url(${frame})`,
      }}
    >
      <div className={`flex ${logos.length > 1 ? "gap-5" : ""}`}>
        {logos.map((logo, i) => (
          <img 
            key={i}
            src={logo}
            alt={"sponsor-" + i}
            className="h-[80px] object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default Panels;