import Link from "next/link";
import React from "react";
import { Link as RadixLink } from "@radix-ui/themes";
import { preload } from "react-dom";

interface Props {
  href: string;
  children: string;
}

const NextLink = ({ href, children }: Props) => {
  return (
    <div>
      <Link href={href} passHref legacyBehavior>
        <RadixLink>{children}</RadixLink>
      </Link>
    </div>
  );
};

export default NextLink;
