"use client";
import Blog from "@/components/Blog";
import ItemMenu from "@/components/ItemMenu";
import ItemOptions from "@/components/ItemOptions";
import Settings from "@/components/Settings";
import SideBar from "@/components/SideBar";
import { Suspense } from "react";
import useMeasure from "react-use-measure";

export default function Home() {
  const [ref, { width }] = useMeasure();

  return (
    <div className="flex flex-col-reverse md:flex-row" ref={ref}>
      <SideBar />
      {width > 765 && (
        <div className="bg-gray-200 dark:bg-gray-800 rounded-tl-xl flex w-full gap-5 px-4 pt-4">
          <ItemMenu />
          <Blog />
          <Settings />
        </div>
      )}
      {width <= 765 && (
        <div className="bg-gray-200 min-h-screen dark:bg-gray-800 flex-col w-full gap-5 px-4 pt-4">
          <ItemOptions />
          <Blog />
        </div>
      )}
    </div>
  );
}
