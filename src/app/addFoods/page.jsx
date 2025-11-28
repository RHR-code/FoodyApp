"use client";
import React, { use } from "react";
import PrivateRoute from "../../../components/PrivateRoute";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/AuthContext";

const page = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleAddFood = (data) => {
    const newTags = data.tags.split(",");
    data.tags = newTags;
    data.price = parseFloat(data.price);
    data.rating = parseFloat(data.rating);
    data.calories = parseFloat(data.calories);
    data.email = user.email;
    axiosSecure
      .post("/foods", data)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Food Added!",
            text: "Food Added Successfully.",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        toast.success(err.code);
      });
  };
  return (
    <PrivateRoute>
      <div className="w-full">
        <div className=" flex flex-col justify-center pt-5 md:w-11/12 md:mx-auto px-1 my-10 ">
          <div className="bg-base-200  border-4 border-secondary flex flex-col items-center justify-center gap-5 rounded-t-2xl py-10 ">
            <h2 className="font-black md:text-5xl text-3xl text-center text-primary leading-tight">
              Welcome <br /> Add Your Book!
            </h2>
          </div>
          <div className="rounded-b-2xl w-full  shrink-0 shadow-2xl   md:px-10 pt-5 border-4 border-secondary border-t-0">
            <div className="card-body">
              <form onSubmit={handleSubmit(handleAddFood)}>
                <fieldset className="fieldset flex flex-col gap-5">
                  {/* Name & Category */}
                  <div className="flex flex-col md:flex-row gap-5 w-full">
                    {/* Name */}
                    <div className="flex-1/2 space-y-5">
                      <label className="label text-secondary text-xl font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        {...register("name", { required: true })}
                        className="input w-full border-2 border-secondary"
                        placeholder="Enter Food Name"
                      />
                      {errors.name?.type === "required" && (
                        <span className="text-red-500">Name is Required</span>
                      )}
                    </div>
                    {/* Category */}
                    <div className="flex-1/2 space-y-5">
                      <label className="label text-secondary text-xl font-semibold">
                        Category
                      </label>
                      <input
                        type="text"
                        {...register("category", { required: true })}
                        className="input w-full  border-2 border-secondary"
                        placeholder="Enter Food Category"
                      />
                      {errors.category?.type === "required" && (
                        <p className="text-red-500">Category is Required</p>
                      )}
                    </div>
                    {/* spicyLevel */}
                    <div className="flex-1/2 space-y-5">
                      <label className="label text-secondary text-xl font-semibold">
                        Spicy Level
                      </label>
                      <input
                        type="text"
                        {...register("spicyLevel", { required: true })}
                        className="input w-full  border-2 border-secondary"
                        placeholder="Enter Food Spicy Level"
                      />
                      {errors.spicyLevel?.type === "required" && (
                        <p className="text-red-500">SpicyLevel is Required</p>
                      )}
                    </div>
                  </div>
                  {/* Price & rating */}
                  <div className="flex flex-col md:flex-row gap-5 ">
                    {/* Genre */}
                    <div className="flex-1/2 space-y-5">
                      <label className="label text-secondary text-xl font-semibold">
                        Price
                      </label>
                      <input
                        type="number"
                        {...register("price", { required: true })}
                        className="input w-full border-2 border-secondary"
                        placeholder="Enter Food Price"
                      />
                      {errors.price?.type === "required" && (
                        <p className="text-red-500">Price is Required</p>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="flex-1/2 space-y-5">
                      <label className="label text-secondary  text-xl font-semibold ">
                        Rating
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="5"
                          step="0.1"
                          {...register("rating", { required: true })}
                          className="input w-full border-2 border-secondary"
                          placeholder="Enter Food Rating"
                        />
                        {errors.rating?.type === "required" && (
                          <p className="text-red-500">Rating is Required</p>
                        )}
                      </div>
                    </div>
                    {/* Calories */}
                    <div className="flex-1/2 space-y-5">
                      <label className="label text-secondary  text-xl font-semibold ">
                        Calories
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          {...register("calories", { required: true })}
                          className="input w-full border-2 border-secondary"
                          placeholder="Enter Food Calory"
                        />
                        {errors.calories?.type === "required" && (
                          <p className="text-red-500">Calory is Required</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <label className="label text-secondary text-xl font-semibold">
                    Description
                  </label>
                  <textarea
                    {...register("description", { required: true })}
                    id=""
                    className="w-full border-2 border-secondary rounded-sm"
                    placeholder="Write Food Description"
                    cols="30"
                    rows="3"
                  ></textarea>
                  {errors.description?.type === "required" && (
                    <p className="text-red-500">Description is Required</p>
                  )}
                  {/* Tags  */}
                  <label className="label text-secondary text-xl font-semibold">
                    Tags (separate them with commas)
                  </label>
                  <input
                    type="text"
                    {...register("tags", { required: true })}
                    className="input w-full border-2 border-secondary"
                    placeholder="Enter Food Tags"
                  />
                  {errors.tags?.type === "required" && (
                    <p className="text-red-500">Tags are Required</p>
                  )}
                  {/* image  */}
                  <label className="label text-secondary text-xl font-semibold">
                    PhotoURL
                  </label>
                  <input
                    type="text"
                    {...register("image", { required: true })}
                    className="input w-full border-2 border-secondary"
                    placeholder="Enter Food PhotoURL"
                  />
                  {errors.image?.type === "required" && (
                    <p className="text-red-500">PhotoURL is Required</p>
                  )}
                  <button className="btn btn-primary mt-4 font-bold text-lg">
                    Add Book
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};

export default page;
