import ItemMenu from "@/components/ItemMenu";
import SideBar from "@/components/SideBar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <SideBar />
      <div className="bg-gray-200 dark:bg-gray-800 rounded-tl-xl flex w-full gap-5 px-4 pt-4">
        <ItemMenu />
        <div className="w-3/5 bg-white min-h-screen rounded-lg"></div>
        <div className="w-1/5 bg-white min-h-screen rounded-lg"></div>
      </div>
    </div>
  );
}
