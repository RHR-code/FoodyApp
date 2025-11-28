"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from "../../../components/SocialLogin";
import { AuthContext } from "../../../context/AuthContext";
import { useRouter } from "next/navigation";

const page = () => {
  const { setUser, user, userSignUp, userProfile } = use(AuthContext);
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    userSignUp(data.email, data.password)
      .then((res) => {
        userProfile({ displayName: data.name, photoURL: data.photoURL }).then(
          () => {
            setUser({
              ...user,
              photoURL: data.photoURL,
              displayName: data.name,
              email: data.email,
            });
            router.push("/");
            toast.success("Successfully Registered!");
          }
        );
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div>
      <div>
        <div className="flex justify-center my-10 mx-5">
          <div className="card bg-base-200  w-full max-w-2xl shrink-0 shadow-2xl py-10 md:py-20 md:px-10">
            <div className="card-body ">
              <h1 className=" font-bold text-4xl text-center">User Login</h1>
              <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset flex flex-col gap-5">
                  {/* Name */}

                  <label className="label text-black text-xl font-semibold">
                    name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="input w-full"
                    placeholder="Enter Your Name"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-500">name is required</p>
                  )}
                  {/* photoURL */}
                  <label className="label text-black text-xl font-semibold">
                    PhotoURL
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    className="input w-full"
                    placeholder="Enter Your PhotoURL"
                  />
                  {errors.photoURL?.type === "required" && (
                    <p className="text-red-500">photoURL is required</p>
                  )}
                  {/* Email */}
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
                    <p className="text-red-500">Email is required</p>
                  )}
                  {/* password */}
                  <label className="label text-black  text-xl font-semibold ">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                      })}
                      className="input w-full "
                      placeholder="Enter Your Password"
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-500">password is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-500">
                        Password must be more than 6 character or more
                      </p>
                    )}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-500">
                        The password should have at least one uppercase , one
                        lowercase and one digit
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
                    Register
                  </button>
                  <SocialLogin />
                  <p className="text-base-100 text-black">
                    Don't have an account?{" "}
                    <Link href="/login" className="text-primary underline">
                      Login
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
