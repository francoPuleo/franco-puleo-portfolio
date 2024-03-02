import React from "react";

export default function HeadingPrimary({ children, colors, textAlign }) {
  let classText = '';

  classText = `text-transparent bg-gradient-to-r from-lightning-yellow-200 to-lightning-yellow-400 bg-clip-text animate-gradient linear-wipe`;
  
  if (colors) {
    classText = colors;
  }

  return (
    <h1 className={`${classText} text-4xl font-bold ${textAlign} py-6 md:text-5xl lg:py-10 px-4 md:px-14 md:py-8 lg:px-8 xl:py-4 lg2:text-3xl`}>{children}</h1>
  );
}
