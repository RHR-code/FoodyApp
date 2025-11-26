"use client";
import React from "react";
import PrivateRoute from "../../../components/PrivateRoute";

const page = () => {
  return (
    <PrivateRoute>
      <div>Add Your Foods</div>;
    </PrivateRoute>
  );
};

export default page;
