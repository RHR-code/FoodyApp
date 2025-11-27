import React from "react";
import { FaStar } from "react-icons/fa";

const PageDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:5000/foods/${id}`, {
    cache: "no-store",
  });

  const food = await res.json();
  const {
    name,
    price,
    image,
    category,
    rating,
    description,
    isAvailable,
    spicyLevel,
    calories,
    tags,
  } = food;
  console.log(food);

  return (
    <div>
      <h1 className="font-bold text-primary text-3xl text-center pt-5">
        Foods Details
      </h1>
      <div className="md:px-10 px-5 my-10">
        <div className="flex items-center flex-col lg:flex-row gap-5 lg:gap-0">
          <div className="md:flex-1/2 w-full flex bg-secondary/20 justify-center items-center min-h-[500px] border-2 border-secondary rounded-2xl md:rounded-l-2xl">
            <img
              className="md:h-[400px] w-[90%] object-cover h-[300px] shadow-2xl"
              src={image}
              alt=""
            />
          </div>
          <div className="md:flex-1/2 w-full flex flex-col gap-5 border-2 border-secondary min-h-[500px] justify-center p-5 md:p-10 lg:border-l-0 rounded-2xl md:rounded-r-2xl">
            <h1 className="font-bold text-primary text-4xl">{name}</h1>

            <div className="flex justify-between">
              <h3 className="font-semibold">{category}</h3>
              {isAvailable ? <p>Available</p> : <p>UnAvailable</p>}
            </div>
            <p className="font-semibold flex items-center gap-2">
              <span className="font-bold">Rating:</span> {rating}{" "}
              <FaStar fill="#f7a202" />
            </p>
            <p>{description}</p>
            <p className="font-bold space-x-1">
              {" "}
              {tags.map((gen, index) => (
                <span key={index} className="badge badge-soft badge-primary">
                  {" "}
                  {gen}
                </span>
              ))}
            </p>
            <p>
              {" "}
              <strong>Price:</strong> {price}$
            </p>
            <div className="flex md:flex-row flex-col justify-between font-bold">
              <p>Calories: {calories}</p>
              <p>SpicyLevel: {spicyLevel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageDetails;
