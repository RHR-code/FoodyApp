"use client";
import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";

import { AuthContext } from "../context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const pathname = useSearchParams();
  const from = pathname.get("from") || "/";

  const router = useRouter();
  const { googleSignIn } = use(AuthContext);
  const handleGoogleSingIn = () => {
    googleSignIn()
      .then((res) => {
        router.push(from);
        toast.success("Successfully Logged In!");
      })
      .catch((error) => {
        toast.success(error.code);
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
