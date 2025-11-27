import React from "react";

const Achievement = () => {
  return (
    <>
      <h1 className="font-bold text-primary text-3xl text-center py-10 pt-24">
        Our Achievements
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  pb-20 px-20 gap-10 lg:gap-0 ">
        <div className="space-y-5 text-center ">
          <h1 className="text-5xl text-primary font-black italic">300 +</h1>
          <h2 className="text-xl font-semibold">Visitors Daily</h2>
        </div>
        <div className="space-y-5 text-center">
          <h1 className="text-5xl text-primary font-black italic">600 +</h1>
          <h2 className="text-xl font-semibold">Deliveries monthly</h2>
        </div>
        <div className="space-y-5 text-center">
          <h1 className="text-5xl text-primary font-black italic">100%</h1>
          <h2 className="text-xl font-semibold">Positive feedback</h2>
        </div>
        <div className="space-y-5 text-center">
          <h1 className="text-5xl text-primary font-black italic">40 +</h1>
          <h2 className="text-xl font-semibold">Awards and honors</h2>
        </div>
      </div>
    </>
  );
};

export default Achievement;
