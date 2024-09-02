import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueFormSkeleton = () => {
  return (
    <div className="max-w-xl space-y-2">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </div>
  );
};

export default IssueFormSkeleton;
