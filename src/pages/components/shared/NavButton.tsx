"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const NavButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const segment = usePathname();
  const active = href === segment;
  console.log({ segment, href });
  console.log("active", active);
  return (
    <Disclosure.Button
      as="a"
      href={href}
      className={classNames(
        active
          ? "bg-primary text-white"
          : "hover:bg-secondary text-gray-300 hover:text-white",
        "block rounded-md px-3 py-2 text-base font-medium",
      )}
    >
      {children}
    </Disclosure.Button>
  );
};

export default NavButton;
