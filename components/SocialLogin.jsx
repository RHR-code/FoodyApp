"use client";
import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from "../context/AuthContext";

const SocialLogin = () => {
  const { googleSignIn } = use(AuthContext);
  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        type="button"
        className="btn w-full bg-white text-black border-[#e5e5e5]"
        onClick={handleGoogleSingIn}
      >
        <FcGoogle size={20} />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
