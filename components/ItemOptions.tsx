import React from "react";
import menu from "../assets/icons/menu.svg";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ItemMenu from "./ItemMenu";

type ItemOptionProps = {};

const ItemOptions: React.FC<ItemOptionProps> = ({}) => {
  return (
    <Sheet>
      <SheetTrigger className="w-full flex mb-5 rounded-lg">
        <div className="w-full bg-white dark:bg-slate-700 h-14 flex items-center justify-between px-6 rounded-lg">
          <div className="flex gap-2 items-center">
            <Image src={menu} alt="menu" width={30} height={30} />
            <p className="font-semibold">Select Food Item</p>
          </div>
          <ChevronDown className="" />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="w-3/4 rounded-xl">
        <div className="pt-5">
          <ItemMenu />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ItemOptions;
