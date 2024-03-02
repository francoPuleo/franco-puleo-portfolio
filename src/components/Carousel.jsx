import React, { useState } from "react";

const Carousel = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex flex-col gap-8 h-max p-4">
      <div className="flex justify-center items-center">
        {media.map((item, index) => (
          <div key={index} className={`w-full flex justify-center items-center p-8 transition-opacity duration-300 ${index === currentIndex ? "opacity-100" : "opacity-0 hidden"} `}>
            {item.type === "image" && <img className="h-max w-72 shadow-uniform shadow-lightning-yellow-200 border " src={item.src} alt={`slide-${index}`}/>}
            {item.type === "video" && (
              <video controls className="h-max w-72 shadow-uniform shadow-lightning-yellow-200 border " src={item.src} type="video/mp4">
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
      <div className="w-full h-max flex flex-row justify-evenly items-center ">
        <img src="/public/arrow-left.svg" alt="Imagen" onClick={prevSlide} className="scale-150"/>
        <img src="/public/arrow-right.svg" alt="Imagen" onClick={nextSlide} className="scale-150"/>
      </div>
    </div>
  );
};

export default Carousel;



