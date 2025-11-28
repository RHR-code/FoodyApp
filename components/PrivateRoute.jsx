"use client";
import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = use(AuthContext);
  if (loading)
    return (
      <div className="flex w-full h-full items-center justify-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  if (user) {
    return children;
  }
  return router.push(`/login`);
};

export default PrivateRoute;
