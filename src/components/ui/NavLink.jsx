"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors hover:text-[#072AC8] dark:hover:text-blue-400 ${
        isActive
          ? "text-[#072AC8] font-semibold dark:text-blue-400"
          : "text-slate-600 dark:text-slate-300"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
