import React from "react";
import { Skeleton } from "@/app/components"

const loading = () => {
  return (
    <div className="max-w-xl space-y-2">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default loading;
