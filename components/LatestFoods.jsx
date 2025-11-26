"use client";

import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

const LatestFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("/food.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  console.log(foods);

  return (
    <div className="mt-24">
      <h1 className="font-bold text-primary text-3xl text-center py-10">
        All The Latest Foods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default LatestFoods;
