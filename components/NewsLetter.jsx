"use client";
import React from "react";
import toast from "react-hot-toast";

const NewsLetter = () => {
  const handleSub = (e) => {
    e.preventDefault();
    toast.success("Subscribed");
    e.target.reset();
  };
  return (
    <div className="bg-[url('/annie-spratt-R3LcfTvcGWY-unsplash.jpg')] h-[600px] w-full bg-cover bg-center bg-no-repeat relative flex flex-col justify-center items-center text-white">
      <div className="absolute w-full h-full inset-0 bg-black/40"></div>
      <div className="flex flex-col z-10 text-center gap-2 md:gap-5">
        <h5 className="text-xl font-black">NEWSLETTER</h5>
        <h1 className=" text-5xl md:text-7xl font-bold ">
          Subscribe our newsletter
        </h1>
        <p className="px-10 md:p-0">
          Get All The Latest Food Update From Us And Much More
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 py-10 z-10">
        <form onSubmit={handleSub} className="flex">
          <input
            type="email"
            className="input md:w-[400px] text-black"
            placeholder="Email"
            required
          />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
