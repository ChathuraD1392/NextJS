import React from "react";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />
});

const NewUserPage = () => {
  return (
    <div>
      <IssueForm />
    </div>
  );
};

export default NewUserPage;
