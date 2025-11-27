"use client";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import FoodCard from "../../../components/FoodCard";

const page = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axiosSecure.get("/foods").then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure]);
  return (
    <div>
      <h1 className="font-bold text-primary text-3xl text-center py-10">
        All The Available Foods : {foods.length}
      </h1>
      {
        <div className="grid grid-cols-1 md:grid-cols-3  gap-10">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      }
    </div>
  );
};

export default page;
