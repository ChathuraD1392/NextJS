import Link from "next/link";
import { AiFillBug } from "react-icons/ai";
import React from "react";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" }
  ];
  return (
    <nav className="flex space-x-6 p-5 border-b font-medium items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              className="text-zinc-500 hover:text-zinc-800 transition-colors"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
