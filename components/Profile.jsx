import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import Link from "next/link";

const Profile = () => {
  const { user } = use(AuthContext);
  return (
    <div className="absolute w-2xs top-16 h-[300px] rounded-2xl bg-red-300 right-5 px-5 z-20">
      <div className=" w-full flex flex-col items-center gap-2 py-5">
        {/* <h2 className="text-3xl font-bold">profile</h2> */}
        <img src={user.photoURL} className="w-20 h-20 object-cover " alt="" />
        <p className="text-2xl font-bold">{user.displayName}</p>
        <p className="text-lg font-semibold">{user.email}</p>
      </div>
      <Link href="/addFoods" className="btn btn-primary w-full ">
        Add Food
      </Link>
      <Link href="/myFoods" className="btn btn-primary w-full  mt-2">
        My Foods
      </Link>
    </div>
  );
};

export default Profile;
