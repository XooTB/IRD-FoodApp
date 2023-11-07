"use client";

import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import { Input } from "./ui/input";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, Search, Gamepad2 } from "lucide-react";

const NavBar: React.FC = () => {
  const { setTheme, theme } = useTheme();

  const toggelTheme = () => {};

  return (
    <nav className="h-[65px] flex justify-between items-center px-10 py-5">
      <div>
        <Image src={logo} alt="logo" className="hover:cursor-pointer" />
      </div>
      <div className="flex items-center rounded-lg py-2 w-1/3 h-14">
        <Input
          type="text"
          placeholder="Search Best Food"
          className="border-2 placeholder:text-gray-400"
        />
        <Search
          className="border-2 px-1 py-1 bg-orange-300 bg-opacity-10 hover:cursor-pointer rounded-md relative right-8 mt-1 mb-1"
          size={28}
          color="#E55527"
        />
      </div>
      <div className="flex justify-between">
        {theme === "dark" ? (
          <Sun
            className="mx-2 border px-2 py-2 bg-orange-400 bg-opacity-10 border-orange-500 rounded-lg"
            size={36}
            onClick={() => setTheme("light")}
          />
        ) : (
          <Moon
            className="mx-2 border px-2 py-2 bg-orange-400 bg-opacity-10 border-orange-500 rounded-lg"
            size={36}
            onClick={() => setTheme("dark")}
          />
        )}
        <Gamepad2
          className="mx-2 border px-2 py-2 bg-orange-400 bg-opacity-10 border-orange-500 rounded-lg"
          size={36}
          onClick={() => setTheme("light")}
        />
        <Menu
          className="mx-2 border px-2 py-2 bg-gray-400 bg-opacity-10 border-gray-500 rounded-lg"
          size={36}
          onClick={() => setTheme("light")}
        />
      </div>
    </nav>
  );
};

export default NavBar;
