"use client";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackButton = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} className="btn btn-primary">
      Go Back!
    </button>
  );
};

export default GoBackButton;
