import React, { useEffect, useRef, useState } from "react";

import { motion, useAnimate } from "framer-motion";

import img1 from "../../public/images/slider_1/1.jpeg";
import img2 from "../../public/images/slider_1/2.jpeg";
import img3 from "../../public/images/slider_1/3.jpeg";
import img4 from "../../public/images/slider_1/4.jpeg";
import img5 from "../../public/images/slider_1/5.jpeg";
import img6 from "../../public/images/slider_1/6.jpeg";
import img7 from "../../public/images/slider_1/7.jpeg";

const Slider = () => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [index, setIndex] = useState(0);

  const [scope, animate] = useAnimate();

  const images = [img1, img2, img3, img4, img5, img6, img7];

  let color;

  useEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight,
      });
      console.log(targetRef);
    }
    animate(scope.current, { left: -dimensions.width * index });
    console.log("useEffect index", index);
  }, [index]);

  const handlePrev = async () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const handleNext = async () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <div className="flex relative">
        <button
          className="absolute h-80 w-40 z-10"
          onClick={handlePrev}
        ></button>
        <button
          className="absolute h-80 w-40 z-10 right-0"
          onClick={handleNext}
        ></button>
        <div className="h-40 w-1 mx-3 my-auto bg-[#e0d8bc]"></div>
        <div className="w-full h-80 overflow-hidden relative" ref={targetRef}>
          <div className="absolute w-full flex" ref={scope}>
            {images.map((image) => {
              return (
                <img
                  key={image.src}
                  src={image.src}
                  alt=""
                  className="w-screen object-cover object-bottom"
                />
              );
            })}
          </div>
        </div>
        <div className="h-40 w-1 mx-3 my-auto bg-[#e0d8bc]"></div>
      </div>
      <div className="flex gap-6 justify-center mt-5">
        {images.map((bullet, bulletIndex) => {
          color = "#bbb";
          if (bulletIndex === index) {
            color = "#000";
          }
          return (
            <span
              key={bulletIndex}
              style={{
                height: "10px",
                width: "10px",
                backgroundColor: color,
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
