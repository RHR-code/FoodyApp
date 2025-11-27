import axios from "axios";
import React from "react";

const instance = axios.create({
  baseURL: "https://food-app-server-eta.vercel.app",
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
