"use client";

import Socials from "@/constants/Socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogImage from "../assets/blog_image.png";
import BlogImage1 from "../assets/blog_image1.png";
import { Star } from "lucide-react";

interface BlogProps {}

const Blog: React.FC<BlogProps> = ({}) => {
  return (
    <div className="md:w-3/5 bg-white dark:bg-slate-700 min-h-screen rounded-lg flex flex-col-reverse md:flex-row gap-5 px-3 pb-10">
      <div className="flex md:flex-col flex-row gap-2 md:items-center md:h-full md:pt-20 md:w-12 px-5">
        {Socials.map(({ icon, url }, i) => (
          <Link href={url} key={i} className="w-7 h-7">
            <Image src={icon} alt="url" className="cursor-pointer w-7 h-7" />
          </Link>
        ))}
      </div>
      <div className="pt-10 md:w-5/6">
        <div className="flex flex-col md:flex-row md:items-center justify-center px-5 md:px-0">
          <div className="md:w-1/2 text-current">
            <h1 className="text-4xl font-bold">
              Health benefits of an avocado
            </h1>
            <p className="font-medium mt-2 mb-1">Supports eye health:</p>
            <p className="text-sm w-full">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
            <p className="font-medium mt-3 mb-1">Supports eye health:</p>
            <p className="text-sm">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
          </div>
          <div className="md:w-1/2 py-5">
            <Image src={BlogImage} alt="blog" />
          </div>
        </div>
        <div className="px-5 md:px-0">
          <p className="font-medium mt-3 mb-1">Supports eye health:</p>
          <p className="text-sm">
            Spinach contains high levels of vitamin A and other antioxidants
            that help maintain healthy vision and protect against age-related
            macular degeneration. Spinach contains high levels of vitamin A and
            other antioxidants that help maintain healthy vision and protect
            against age-related macular degeneration. Spinach contains high
            levels of vitamin A and other antioxidants that help maintain
            healthy vision and protect against age-related macular degeneration.
            Spinach contains high levels of vitamin A and other antioxidants
            that help maintain healthy vision and protect against age-related
            macular degeneration. Spinach contains high levels of vitamin A and
            other antioxidants that help maintain healthy vision and protect
            against age-related macular degeneration.
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-10 gap-3 items-center px-5 md:px-0">
          <div className="md:w-1/2">
            <Image src={BlogImage1} alt="blog" />
          </div>
          <div className="md:w-1/2 text-current">
            <p className="font-medium mt-2 mb-1">Supports eye health:</p>
            <p className="text-sm">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
            <p className="font-medium mt-3 mb-1">Supports eye health:</p>
            <p className="text-sm">
              Spinach contains high levels of vitamin A and other antioxidants
              that help maintain healthy vision and protect against age-related
              macular degeneration.
            </p>
          </div>
        </div>
        <div className="py-10 md:py-20 px-5">
          <h1 className="font-semibold">Was this Helpful?</h1>
          <div className="flex gap-1">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
