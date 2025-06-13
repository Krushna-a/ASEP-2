import React, { useState } from "react";

const HomeComp3 = ({ onHover }) => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      title: "1. Go to the Website",
      icon: "🌐",
      description: "Open the Lost & Found site in your browser.",
    },
    {
      title: "2. Sign Up or Log In",
      icon: "🔑",
      description: "Create an account or log in if you already have one.",
    },
    {
      title: "3. Report Lost Item",
      icon: "📝",
      description: (
        <>
          Click "Add Item" and fill the form:
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Item name</li>
            <li>Contact info</li>
            <li>Last seen location</li>
            <li>Upload photo</li>
          </ul>
        </>
      ),
    },
    {
      title: "4. Get QR/NFC Code",
      icon: "📱",
      description: "The system gives you a QR code or NFC tag for your item.",
    },
    {
      title: "5. Attach the Code to Your Item",
      icon: "🔖",
      description: "Stick or write the code/tag on the item (if possible).",
    },
    {
      title: "6. Finder Scans the Code",
      icon: "🤳",
      description:
        "When someone finds it, they scan the code using their phone.",
    },
    {
      title: "7. They See Your Contact Info",
      icon: "📞",
      description: "They get your details and contact you to return the item.",
    },
  ];

  const handleMouseEnter = () => {
    onHover(true);
  };

  const handleMouseLeave = () => {
    onHover(false);
  };

  return (
    <div
      className="w-full py-16 bg-gradient-to-br from-gray-50 to-indigo-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          How It Works
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Simple steps to recover your lost items using our platform
        </p>

        {/* Video Section */}
        <div
          className="mb-16 rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-indigo-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            src="https://ik.imagekit.io/y8hkeaj2f/WhatsApp%20Video%202025-06-12%20at%2015.53.09_469612b4.mp4?updatedAt=1749827528730"
            autoPlay
            controls
            muted
            className="w-full aspect-video object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Steps with hover interactions */}
        <div className="space-y-6 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => {
                setActiveStep(index);
                handleMouseEnter();
              }}
              onMouseLeave={() => {
                setActiveStep(null);
                handleMouseLeave();
              }}
            >
              <div
                className={`flex items-start bg-white rounded-xl p-6 shadow-sm transition-all duration-300 border border-gray-100 
                ${
                  activeStep === index
                    ? "shadow-md border-indigo-200 bg-indigo-50"
                    : "hover:shadow-md hover:border-indigo-100"
                }`}
              >
                <div
                  className={`flex-shrink-0 p-3 rounded-lg text-2xl mr-4 transition-colors duration-300 
                  ${
                    activeStep === index
                      ? "bg-indigo-600 text-white"
                      : "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white"
                  }`}
                >
                  {step.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xl font-semibold mb-1 transition-colors duration-300 
                    ${
                      activeStep === index ? "text-indigo-700" : "text-gray-800"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-300 
                    ${
                      activeStep === index
                        ? "max-h-96 pt-2 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-gray-600">{step.description}</div>
                  </div>
                </div>
              </div>

              {/* Connecting line between steps (except last one) */}
              {index < steps.length - 1 && (
                <div
                  className={`absolute left-10 top-full h-6 w-0.5 ml-5 mt-1 transition-colors duration-300 
                  ${
                    activeStep === index || activeStep === index + 1
                      ? "bg-indigo-400"
                      : "bg-indigo-200"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComp3;
