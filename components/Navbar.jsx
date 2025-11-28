"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Profile from "./Profile";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, userSignOut } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const links = (
    <>
      <li>
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/allFoods"
          className={pathname === "/allFoods" ? "active" : ""}
        >
          All Foods
        </Link>
      </li>
      <li>
        <Link
          href="/addFoods"
          className={pathname === "/addFoods" ? "active" : ""}
        >
          Add Foods
        </Link>
      </li>
      <li>
        <Link
          href="/myFoods"
          className={pathname === "/myFoods" ? "active" : ""}
        >
          My Foods
        </Link>
      </li>
    </>
  );

  const handleLogout = () => {
    userSignOut()
      .then(() => {
        router.push("/");
        toast.success("Successfully Logged Out!");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <>
      <div className="navbar bg-base-200 shadow-sm md:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/" className="text-primary text-3xl font-black ">
            FoodyApp
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <Link href="/login" className="btn btn-outline btn-primary">
              Login
            </Link>
          ) : (
            <div className="relative flex gap-2">
              <button onClick={handleLogout} className="btn btn-primary ">
                Logout
              </button>
              <div className="w-10 h-10">
                <img
                  src={user?.photoURL}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`w-full h-full object-cover rounded-ful ${
                    isOpen ? "border-2 rounded-full" : "rounded-full"
                  }`}
                  alt="avatar"
                />
              </div>
              {isOpen ? <Profile /> : ""}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
