import React from "react";

const OurWorks = () => {
  return (
    <div className="h-screen flex flex-col lg:space-y-8 space-y-30 pl-32 lg:pl-1">
      <div className="lg:pb-20 pb-80">
        <h1 className="text-4xl md:text-7xl h-[30vh] md:h-[50vh] w-[90vw] md:w-[70vw] text-center md:text-left">
          As global leaders in UX UI, technology, and business solutions, we
          partner with clients to simplify, strengthen, and transform their
          businesses.
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-screen gap-4 md:gap-0">
        <div className="bg-[rgb(251,84,87)] h-[40vh] md:h-[80vh] mx-4 md:ml-20 flex items-center justify-center">
          <h4 className="text-white text-3xl md:text-5xl text-center">Rigi</h4>
        </div>
        <div className="bg-[rgb(88,87,249)] h-[40vh] md:h-[80vh] mx-4 flex items-center justify-center">
          <h4 className="text-white text-3xl md:text-5xl text-center">BMW</h4>
        </div>
        <div className="bg-[rgb(156,52,240)] h-[40vh] md:h-[80vh] mx-4 md:mr-20 flex items-center justify-center">
          <h4 className="text-white text-3xl md:text-5xl text-center">
            Nirmal Bang
          </h4>
        </div>
      </div>
    </div>
  );
};

export default OurWorks;
