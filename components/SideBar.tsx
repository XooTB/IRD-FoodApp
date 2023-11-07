import React from "react";
import SideBarItems from "@/constants/SideBarItems";
import Image from "next/image";

interface Props {}

const SideBar: React.FC<Props> = () => {
  return (
    <div
      className="
      flex items-center sticky bg-white bottom-0 h-20 justify-evenly w-full gap-5 rounded-t-md dark:bg-gray-800 dark:text-white py-2 
      md:left-0 md:flex-col md:w-20 md:min-h-screen md:top-0 md:rounded-none md:dark:bg-inherit md:bg-white md:justify-center
     "
    >
      {SideBarItems.map(({ icon, title }, i) => (
        <Image
          key={i}
          src={icon}
          alt={title}
          className="w-10 border px-1 py-1 rounded-lg bg-gray-200 hover:cursor-pointer hover:bg-orange-200 dark:bg-gray-400 dark:hover:bg-orange-200 "
        />
      ))}
    </div>
  );
};

export default SideBar;
