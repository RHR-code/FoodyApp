import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({ food }) => {
  const { _id, photoURL, category, name, rating, tags, description } = food;
  return (
    <div className="card bg-base-200  shadow-sm  p-5 ">
      <figure className="w-full h-[300px]">
        <img fill className="object-cover " src={photoURL} alt="Foods" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">
          {name}
          <div className="badge badge-secondary">{category}</div>
        </h2>
        <p>
          <strong>Rating:</strong> {rating}
        </p>
        <p className="line-clamp-1">{description}</p>
        <div className="card-actions justify-start py-5">
          {tags.map((tag, ind) => (
            <div key={ind} className="badge badge-outline badge-primary">
              {tag}
            </div>
          ))}
        </div>
        View Details
        <Link href={`/allFoods/${_id}`} className="btn btn-primary "></Link>
      </div>
    </div>
  );
};

export default FoodCard;
