import React from "react";

export default function MinorHeading({ children }) {
  return (
    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-lightning-yellow-400 text-start py-4 md:py-6 lg:py-8 px-4 md:px-6 lg:px-8">{children}</h3>
  );
}
