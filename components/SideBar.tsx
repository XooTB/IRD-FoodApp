"use client";

import React from "react";
import SideBarItems from "@/constants/SideBarItems";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {}

const SideBar: React.FC<Props> = () => {
  const pathname = usePathname();
  const currentPath = pathname === "/" ? "/" : pathname.split("/")[1];

  return (
    <div
      className="
      flex items-center sticky bg-white bottom-0 h-20 justify-evenly w-full gap-5 rounded-t-md dark:bg-gray-800 dark:text-white py-2 
      md:left-0 md:flex-col md:min-w-[44px] md:max-w-[54px] md:min-h-screen md:top-0 md:rounded-none md:dark:bg-inherit md:bg-white md:justify-center
     "
    >
      {SideBarItems.map(({ Icon, url }, i) => (
        <Link
          href={`/${url}`}
          key={i}
          className={`flex justify-center items-center border w-10 h-10 rounded-lg text-center ${
            currentPath === url
              ? "border-[#E55527] bg-[#E55527] bg-opacity-10"
              : "border-transparent bg-gray-200"
          } hover:bg-gray-100 dark:hover:bg-gray-700`}
        >
          <Icon stroke={currentPath === url ? "#E55527" : "#323232"} />
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
