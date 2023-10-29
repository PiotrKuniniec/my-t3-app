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
          ? "bg-orange-500 text-white"
          : "text-gray-300 hover:bg-orange-300 hover:text-white",
        "block rounded-md px-3 py-2 text-base font-medium",
      )}
    >
      {children}
    </Disclosure.Button>
  );
};

export default NavButton;
