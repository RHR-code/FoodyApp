"use client";
import React, { use, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext";
import Link from "next/link";

const page = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/foods?email=${user?.email}`).then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure, user]);
  return (
    <div>
      {/* My Foods: {foods.length} */}
      <div className="overflow-x-auto">
        <table className="table table-zebra ">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
              <th className="flex-1 flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food, ind) => (
              <tr key={food._id}>
                <th>{ind + 1}</th>
                <td>{food.name}</td>
                <td>{food.price}</td>
                <td>{food.rating}</td>
                <td className="flex-1 flex justify-center gap-5">
                  <Link
                    href={`/allFoods/${food._id}`}
                    className="btn btn-primary"
                  >
                    View
                  </Link>
                  <button className="btn btn-primary">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
