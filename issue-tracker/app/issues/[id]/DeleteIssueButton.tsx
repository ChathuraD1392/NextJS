import Link from "next/link";
import { Button } from "@radix-ui/themes";
import { MdDelete } from "react-icons/md";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <MdDelete />
      <Link href={`/issues/${issueId}/edit`}>Delete Issue</Link>
    </Button>
  );
};

export default DeleteIssueButton;
