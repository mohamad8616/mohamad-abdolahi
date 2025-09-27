import Spinner from "@/components/UI/Spinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner />
    </div>
  );
};

export default loading;
