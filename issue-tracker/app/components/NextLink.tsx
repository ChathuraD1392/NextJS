import Link from "next/link";
import React, { ReactNode } from "react";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: ReactNode;
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
