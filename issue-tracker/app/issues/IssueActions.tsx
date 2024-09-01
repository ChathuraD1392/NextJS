import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { MdOpenInNew } from "react-icons/md";

const IssueActions = () => {
  return (
    <div>
      <Button>
        <MdOpenInNew />
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;
