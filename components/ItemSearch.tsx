import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface ItemSearchProps {
  placeholder: string;
}

const ItemSearch: React.FC<ItemSearchProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center border border-orange-500 rounded-lg px-1">
      <Input
        placeholder={placeholder}
        className="border-0 focus-visible:ring-0 focus-visible:outline-none w-full"
      ></Input>
      <Search
        className="border-orange-500 border px-1 py-1 rounded-md bg-orange-400 bg-opacity-10 hover:cursor-pointer"
        size={30}
        color="orange"
      />
    </div>
  );
};

export default ItemSearch;
