import React from "react";
import Image from "next/image";
import emptyImage from "../../assets/404.png";

const page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen rounded-tl-xl">
      <Image src={emptyImage} alt="404" />
      <h1 className="text-xl font-bold">This page is Empty</h1>
    </div>
  );
};

export default page;
