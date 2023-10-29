"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const segment = usePathname();
  const active = href === segment;
  return (
    <Link
      href={href}
      // className={active ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-700 hover:text-white'}
      className={classNames(
        active
          ? "bg-primary text-white"
          : "hover:bg-secondary text-gray-900 hover:text-white",
        "rounded-md px-3 py-2 text-sm font-medium",
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
