import React from "react";

const DownloadApp = () => {
  return (
    <div className="mt-24">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="https://png.pngtree.com/png-clipart/20250415/original/pngtree-delicious-fast-food-chicken-tenders-art-illustration-png-image_20728712.png"
              className="max-w-2xl rounded-lg bg-primary shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-bold">Download our application!</h1>
            <p className="py-6">
              You can use our user friendly mobile app . We have both android
              and apple version of our app.You will find all the features you
              need from the app.
            </p>
            <button className="btn btn-primary mr-5">App Store</button>
            <button className="btn btn-primary">Google Store</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
