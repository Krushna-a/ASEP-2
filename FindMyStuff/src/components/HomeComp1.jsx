import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HomeComp1 = () => {
  const mainHeading = useRef(null);
  const subHeading = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (mainHeading.current && subHeading.current) {
        console.log(subHeading);
        mainHeading.current.innerText = "Register Your Items";
        subHeading.current.innerText = "NFC to Rescue";
      }
    }, 3000);

    return () => clearTimeout(timeout); 
  }, []);
  return (
    <>
      <div className="w-full flex justify-center items-center mt-22">
        <img
          src="https://i.postimg.cc/4xJymRhV/bannerr2.png"
          alt="Banner"
          className="loadAnimation w-full max-w-5xl h-[200px] sm:h-[200px] md:h-[500px] md:mx-30 md:w-[900px] relative drop-shadow-[0_0_10px_rgba(25,10,100,0.7)] "
        />
        <div className="absolute flex flex-col items-center gap-2 md:gap-4 p-4 md:p-6 rounded-lg">
          <h1
            className="text-2xl sm:text-4xl md:text-6xl prata-regular text-black text-shadow-lg"
            ref={mainHeading}
          >
            Lost Something?
          </h1>
          <p
            className="text-lg sm:text-2xl md:text-3xl bentham-regular text-black text-shadow-sm"
            ref={subHeading}
          >
            We Will help you find it
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-7 my-8 px-4">
        <Link to="/signup" className="w-full sm:w-auto">
          <button className="w-full border rounded-full px-6 py-3 text-lg md:text-3xl md:px-12 md:py-5 font-semibold bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition transform duration-200 shadow-md cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            Get Started
          </button>
        </Link>
        <Link to="/scan" className="w-full sm:w-auto">
          <button className="w-full border border-gray-300 rounded-full px-6 py-3 md:text-3xl md:px-12 md:py-5 text-lg md:text-2xl font-semibold hover:bg-black hover:scale-105 hover:text-white transition transform duration-200 shadow-md cursor-pointer hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]">
            Scan a found item
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeComp1;
