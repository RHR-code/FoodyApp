"use client";
import React, { use, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import FoodCard from "../../../components/FoodCard";
import PrivateRoute from "../../../components/PrivateRoute";

const page = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const [allFoods, setAllFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosSecure
      .get("/foods")
      .then((res) => {
        setFoods(res.data);
        setAllFoods(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [axiosSecure]);
  const handleSearch = (search) => {
    if (!search) {
      return setFoods(allFoods);
    }
    const newFoods = [...foods].filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setFoods(newFoods);
  };
  const handleFilter = (value) => {
    if (value === "HighToLow") {
      const sortedFoods = [...foods].sort((a, b) => b.rating - a.rating);
      setFoods(sortedFoods);
    } else if (value === "LowToHigh") {
      const sortedFoods = [...foods].sort((a, b) => a.rating - b.rating);
      setFoods(sortedFoods);
    } else {
      setFoods(allFoods);
    }
  };
  if (loading) {
    return (
      <div className="flex w-screen h-screen items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <PrivateRoute>
      <div>
        <h1 className="font-bold text-primary text-xl md:text-3xl text-center py-10">
          All The Available Foods : {foods.length}
        </h1>
        <div className="flex items-center flex-col md:flex-row pb-5 md:pb-0 justify-between md:px-10">
          {/* search */}
          <div className="py-5">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={(e) => handleSearch(e.target.value)}
                type="search"
                required
                placeholder="Search"
              />
            </label>
          </div>
          {/* filter */}
          <div className="">
            <fieldset className="fieldset">
              <select
                onChange={(e) => handleFilter(e.target.value)}
                defaultValue="Pick a browser"
                className="select"
              >
                <option value="default" selected>
                  Sort By Rating
                </option>
                <option value="HighToLow">High To Low</option>
                <option value="LowToHigh">Low To High</option>
              </select>
            </fieldset>
          </div>
        </div>
        {
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 mx-5">
            {foods.length !== 0 ? (
              foods.map((food) => <FoodCard key={food._id} food={food} />)
            ) : (
              <div className="font-bold text-5xl w-full text-center col-span-3">
                No Items Found!
              </div>
            )}
          </div>
        }
      </div>
    </PrivateRoute>
  );
};

export default page;
