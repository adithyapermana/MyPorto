"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed w-full z-10 bg-[#121212] shadow-lg border-b border-[#33353F]">
      <div className="container flex items-center justify-between mx-auto py-4 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-5xl font-semibold text-white hover:text-cyan-500 transition duration-300">
          Adithya Rachmadhani Permana
        </Link>

        {/* Mobile Menu Button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-cyan-500 transition duration-300"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 rounded text-slate-200 hover:text-cyan-500 transition duration-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Desktop Menu */}
        <div className={`menu hidden md:block md:w-auto`}>
          <ul className="flex space-x-8 text-white text-lg">
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <NavLink href={link.path} title={link.title} />
                <div className="absolute w-0 h-[2px] bg-cyan-500 transition-all duration-300 group-hover:w-full bottom-0 left-0"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
