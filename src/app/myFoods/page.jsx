"use client";
import React, { use, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../context/AuthContext";
import Link from "next/link";
import PrivateRoute from "../../../components/PrivateRoute";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const page = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  // const [foods, setFoods] = useState([]);
  // useEffect(() => {
  //   axiosSecure.get(`/foods?email=${user?.email}`).then((res) => {
  //     setFoods(res.data);
  //   });
  // }, [axiosSecure, user]);
  const { data: foods = [], refetch } = useQuery({
    queryKey: ["email", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/foods?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((res) => {
        axiosSecure.delete(`/foods/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <PrivateRoute>
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
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default page;
