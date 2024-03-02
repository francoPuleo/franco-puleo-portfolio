import React from "react";

export default function SubHeading({ children, colors, alingText, bg, br, br2, shadow, mb}) {

  let classText = '';

  classText = `text-transparent bg-gradient-to-r from-lightning-yellow-200 to-lightning-yellow-400 bg-clip-text animate-gradient linear-wipe`;

  if (colors) {
    classText = colors;
  }

  return (
    <h2 className={`${classText} text-2xl md:text-xl lg:text-2xl font-semibold ${alingText} ${bg} pt-8 pb-1 md:py-6 lg:py-8 px-4 md:px-6 ${mb} md:text-4xl lg:px-8 lg2:text-xl ${shadow}`}>{children} <br /> {br} <br /> {br2} </h2>
  );
}
