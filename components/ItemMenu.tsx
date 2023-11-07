"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemSearch from "./ItemSearch";
import { FruitItems } from "@/constants/Items";
import FoodListItem from "./FoodListItem";
import { ScrollArea } from "./ui/scroll-area";

interface ItemMenuProps {}

const ItemMenu: React.FC<ItemMenuProps> = ({}) => {
  return (
    <div className="w-1/5 bg-white dark:bg-slate-700 min-h-screen rounded-lg flex flex-col">
      <Tabs
        defaultValue="fruits"
        className="w-full flex flex-col gap-3 justify-center px-2 pt-3"
      >
        {/* Tabs List */}
        <TabsList className="w-full h-12 border-2 border-orange-200">
          <TabsTrigger
            value="fruits"
            className="w-1/2 h-10 data-[state=active]:text-orange-500 data-[state=active]:bg-orange-400 data-[state=active]:bg-opacity-10"
          >
            Fruits
          </TabsTrigger>
          <TabsTrigger
            value="vegetables"
            className="w-1/2 h-10 data-[state=active]:text-orange-500 data-[state=active]:bg-orange-400 data-[state=active]:bg-opacity-10"
          >
            Vegetables
          </TabsTrigger>
        </TabsList>

        {/* Fruits tab Content */}
        <TabsContent value="fruits">
          <ItemSearch placeholder="Search by Fruits" />
          <h1 className="font-medium dark:text-current pt-5 text-sm">
            Fruits List
          </h1>
          <ScrollArea className="flex flex-col h-[450px] mt-3 pr-3">
            {FruitItems.map(({ name, image, description }) => (
              <FoodListItem
                name={name}
                image={image}
                description={description}
                key={name}
              />
            ))}
          </ScrollArea>
        </TabsContent>

        {/* Vegetables tab Content */}
        <TabsContent value="vegetables">
          <ItemSearch placeholder="Search by Vegetables" />
          <h1 className="font-medium dark:text-current pt-5 text-sm">
            Vegetable List
          </h1>
          <ScrollArea className="flex flex-col h-[450px] mt-3 pr-3">
            {FruitItems.map(({ name, image, description }) => (
              <FoodListItem
                name={name}
                image={image}
                description={description}
                key={name}
              />
            ))}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ItemMenu;
