"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors hover:text-[#072AC8] ${
        isActive ? "text-[#072AC8] font-semibold" : "text-slate-600"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
