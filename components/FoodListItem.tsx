import Image, { StaticImageData } from "next/image";
import React from "react";

interface FoodListItemProps {
  name: string;
  description: string;
  image: StaticImageData;
}

const FoodListItem: React.FC<FoodListItemProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="flex py-2 px-2 gap-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:cursor-pointer mt-2">
      <Image
        src={image}
        alt="name"
        className="w-16 h-16 rounded-lg font-semibold"
      />
      <div className="">
        <h1 className="text-current font-medium">{name}</h1>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  );
};

export default FoodListItem;
