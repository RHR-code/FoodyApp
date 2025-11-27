"use client";

import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import useAxiosSecure from "../hooks/useAxiosSecure";

const LatestFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axiosSecure("/latest-foods").then((res) => setFoods(res.data));
  }, [axiosSecure]);

  return (
    <div className="mt-24">
      <h1 className="font-bold text-primary text-3xl text-center py-10">
        All The Latest Foods
      </h1>
      <div className="grid grid-cols-1 mx-5 md:grid-cols-2 lg:grid-cols-3  gap-10">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default LatestFoods;
