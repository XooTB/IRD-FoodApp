import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface ItemSearchProps {
  placeholder: string;
  className?: string;
  input?: string;
}

const ItemSearch: React.FC<ItemSearchProps> = ({
  placeholder,
  className,
  input,
}) => {
  return (
    <div
      className={`flex items-center border border-[#E55527] rounded-lg px-1 ${className}`}
    >
      <Input
        placeholder={placeholder}
        className={`border-0 focus-visible:ring-0 focus-visible:outline-none w-full ${input}`}
      ></Input>
      <Search
        className="border-[#E55527] border px-1 py-1 rounded-md bg-[#E55527] bg-opacity-10 hover:cursor-pointer"
        size={30}
        color="orange"
      />
    </div>
  );
};

export default ItemSearch;
