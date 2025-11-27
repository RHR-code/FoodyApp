"use client";

import Link from "next/link";
import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthContext";
import SocialLogin from "../../../components/SocialLogin";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const [showPass, setShowPass] = useState(false);
  const { user, userSignIn } = use(AuthContext);
  const pathname = useSearchParams();
  const from = pathname.get("from") || "/";
  console.log(user);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    userSignIn(data.email, data.password)
      .then((res) => {
        console.log(res, "Logged In Successfully");
        router.push(from);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div>
        <div className="flex justify-center my-10">
          <div className="card bg-base-200  w-full max-w-2xl shrink-0 shadow-2xl py-10 md:py-20 md:px-10">
            <div className="card-body ">
              <h1 className=" font-bold text-4xl text-center">User Login</h1>
              <form onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset flex flex-col gap-5">
                  <label className="label text-black text-xl font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="input w-full"
                    placeholder="Enter Your Email"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-500">Email is Required</p>
                  )}
                  <label className="label text-black  text-xl font-semibold ">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                      className="input w-full "
                      placeholder="Enter Your Password"
                    />
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-500">
                        Password must be 6 character or longer
                      </p>
                    )}
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-3 top-2.5 z-10"
                    >
                      {showPass ? (
                        <FaRegEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="link text-black link-hover  underline text-sm font-semibold">
                      Forgot password?
                    </div>
                  </div>
                  <button className="btn btn-primary mt-4 font-bold text-lg">
                    Login
                  </button>
                  <SocialLogin />
                  <p className="text-black">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-primary underline">
                      Register
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
