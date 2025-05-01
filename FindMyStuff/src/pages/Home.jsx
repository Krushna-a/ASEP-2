import React, { useEffect, useState } from "react";
import HomeComp1 from "../components/HomeComp1";
import HomeComp2 from "../components/HomeComp2";
import HomeComp3 from "../components/HomeComp3";
import HomeComp4 from "../components/HomeComp4";

const Home = () => {
  const [visibleComp, setVisibleComp] = useState(0);
  const [duration, setDuration] = useState(5000);

  useEffect(() => {
    const delay = setTimeout(() => {
      setVisibleComp((prev) => (prev >= 3 ? 3 : prev + 1));
    }, duration);

    return () => clearTimeout(delay);
  }, [visibleComp, duration]);

  const handlePrevious = () => {
    setVisibleComp((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setVisibleComp((prev) => (prev >= 3 ? 3 : prev + 1));
  };

  const handleHold = (shouldHold) => {
    setDuration(shouldHold ? 3600000 : 5000);
  };

  return (
    <div>
      <div className="w-full flex flex-col items-center my-5 gap-2">
        <div className="mt-16 w-[80vw] flex justify-end">
          <div
            className="py-2 px-5 border hover:opacity-10 hover:animate-pulse cursor-pointer"
            style={{ transition: "opacity 0.1s ease-out" }}
            onMouseEnter={() => handleHold(true)}
            onMouseLeave={() => handleHold(false)}
            onMouseDown={() => handleHold(true)}
            onMouseUp={() => handleHold(false)}
          >
            Click Here/Enter Cursor Here to Hold at this Component
          </div>
        </div>
        <div className="w-full sm:w-[80%] flex relative h-10">
          {visibleComp > 0 && (
            <button
              className="rounded-full px-8 py-2 bg-blue-600 text-lg font-bold text-gray-200 hover:scale-105 hover:border-3 hover:border-gray-400 transition-all ease-out duration-100 absolute left-0"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {visibleComp < 3 && (
            <button
              className="rounded-full px-8 py-2 bg-blue-600 text-lg font-bold text-gray-200 hover:scale-105 hover:border-3 hover:border-gray-400 transition-all ease-out duration-100 absolute right-0"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
        <div className="w-[80vw] flex flex-col items-center gap-5">
          {visibleComp === 0 && (
            <div className="transition-all duration-700 opacity-100">
              <HomeComp1 />
            </div>
          )}
          {visibleComp === 1 && (
            <div className="transition-all duration-700 opacity-100">
              <HomeComp2 />
            </div>
          )}
          {visibleComp === 2 && (
            <div className="transition-all duration-700 opacity-100">
              <HomeComp3 />
            </div>
          )}
          {visibleComp === 3 && (
            <div className="transition-all duration-700 opacity-100">
              <HomeComp4 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
