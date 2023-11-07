"use client";

import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Input } from "./ui/input";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, Search, Gamepad2 } from "lucide-react";
import ItemSearch from "./ItemSearch";

const NavBar: React.FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="h-[65px] flex justify-between items-center px-5 md:px-10 py-5">
      <div className="w-1/2 md:w-1/4">
        <Image src={logo} alt="logo" className="hover:cursor-pointer" />
      </div>

      <div className="hidden md:flex justify-end md:justify-center md:items-center rounded-lg md:py-2 md:w-2/4 h-14">
        <ItemSearch
          placeholder="Search Best food"
          className="hidden md:flex md:w-[300px]"
          input="hidden md:block"
        />
      </div>

      <div className="hidden md:flex justify-end w-1/4">
        {theme === "dark" ? (
          <Sun
            className="mx-2 border px-2 py-2 bg-[#E55527] bg-opacity-10 border-primary rounded-lg hover:cursor-pointer"
            size={36}
            onClick={() => setTheme("light")}
          />
        ) : (
          <Moon
            className="mx-2 border px-2 py-2 bg-[#E55527] bg-opacity-10 border-primary rounded-lg hover:cursor-pointer"
            size={36}
            onClick={() => setTheme("dark")}
          />
        )}
        <Gamepad2
          className="mx-2 border px-2 py-2 bg-[#E55527] bg-opacity-10 border-primary rounded-lg hover:cursor-pointer"
          size={36}
        />
        <Menu
          className="mx-2 border px-2 py-2 bg-gray-400 bg-opacity-10 border-gray-500 rounded-lg hover:cursor-pointer"
          size={36}
        />
      </div>
      {/* Mobile */}
      <div className="flex md:hidden justify-end w-1/2">
        <Search
          size={36}
          className="mx-2 border px-2 py-2 bg-[#E55527] bg-opacity-10 border-primary rounded-lg hover:cursor-pointer"
        />
        {theme === "dark" ? (
          <Sun
            className="mx-2 border px-2 py-2 bg-[#E55527] bg-opacity-10 border-primary rounded-lg hover:cursor-pointer"
            size={36}
            onClick={() => setTheme("light")}
          />
        ) : (
          <Moon
            className="mx-2 border px-2 py-2 bg-[#E55527] bg-opacity-10 border-primary rounded-lg hover:cursor-pointer"
            size={36}
            onClick={() => setTheme("dark")}
          />
        )}
        <Menu
          className="mx-2 border px-2 py-2 bg-gray-400 bg-opacity-10 border-gray-500 rounded-lg hover:cursor-pointer"
          size={36}
        />
      </div>
    </nav>
  );
};

export default NavBar;
