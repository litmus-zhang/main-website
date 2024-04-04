import Image from "next/image";
import React from "react";
import Logo from "../public/Symbol.svg";
import Button from "./Button";

interface NavItemProps {
  text: string;
  href: string;
}

export function NavItem({ text, href }: NavItemProps) {
  return (
    <li className="flex text-white-1 hover:text-blue-400 ">
      <a href={href}>{text}</a>
    </li>
  );
}

function NavBar() {
  return (
    <div className="sticky top-0 flex z-10000 px-12 justify-between items-center p-4 bg-dark">
      <Image src={Logo} alt={"Dynage Logo"} width={40} height={40} />
      <div className="lg:flex items-center gap-4 sm:hidden">
      <NavItem text="Products" href="/" />
        <NavItem text="Dynage Studio" href="/about" />
        <NavItem text="Research & Development" href="/contact" />
        <NavItem text="Community" href="/contact" />
      </div>

      <nav className="flex gap-4 items-center">
        <NavItem text="Build with us" href="/contact" />
        <Button
          text="Contact Us"
          type="button"
          size="small"
          variant="primary"
        />
      </nav>
    </div>
  );
}

export default NavBar;
