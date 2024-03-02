import React from "react";

export default function Paragraph({ children, textAling, sizeProp, color, fontBold}) {
  
  let size = "";

  if(sizeProp){
    size = sizeProp
  }else{
    size = "text-base"
  }

  return (
    <p className={`${size} ${fontBold} z-20 md:text-2xl md:p-8 lg:text-xl ${color} p-4 shadow-sm ${textAling}`}>{children}</p>
  );
}
