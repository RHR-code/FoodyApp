"use client";
import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { usePathname, useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading } = use(AuthContext);
  if (loading) return <div>loading...</div>;
  if (user) {
    return children;
  }
  return router.push(`/login`);
};

export default PrivateRoute;
