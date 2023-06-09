import React, { useEffect, useRef, useState } from "react";

import { motion, useAnimate } from "framer-motion";

const Slider = ({ images }) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [index, setIndex] = useState(0);

  const [scope, animate] = useAnimate();

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
          className="absolute h-[480px] w-40 z-50 md:w-60 lg:h-[650px] lg:w-64"
          onClick={handlePrev}
        ></button>
        <button
          className="absolute h-[480px] w-40 z-50 right-0 md:w-60 lg:h-[650px] lg:w-64"
          onClick={handleNext}
        ></button>
        <div className="h-40 w-1 mx-3 my-auto bg-[#e0d8bc] "></div>
        <div className="w-full h-[480px] overflow-hidden relative md:w-full lg:h-[650px]">
          <div className="absolute w-full flex " ref={scope}>
            {images.map((image, index) => {
              return (
                <img
                  key={image.src}
                  src={image.src}
                  ref={index === 0 ? targetRef : null}
                  alt=""
                  className="w-screen object-cover md:w-96 lg:w-[600px]"
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
