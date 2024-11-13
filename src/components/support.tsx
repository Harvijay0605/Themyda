import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";

const Support = () => {
  return (
    <div className="relative">
      <div className="absolute -translate-y-1/2 right-0 top-14 w-72 h-60 max-laptop-1100:w-52 max-laptop-1100:h-40 max-tablet-700:w-44 max-tablet-700:h-32 max-mobile:w-32 max-mobile:h-24">
        <Image
          src="/Icons/parallexIcon1.png"
          alt="parallex icon"
          // width={274}
          // height={245}
          fill
          sizes="274px"
          className=""
        />
      </div>
      <div className="absolute -translate-y-1/2 left-0 top-44 w-36 h-48 max-laptop-1100:w-32 max-laptop-1100:h-40 max-tablet-700:w-24 max-tablet-700:h-32 max-mobile:w-16 max-mobile:h-24 max-mobile:top-36">
        <Image
          src="/Icons/parallexIcon2.png"
          alt="parallex icon"
          // width={150}
          // height={200}
          sizes="150px"
          fill
          className=""
        />
      </div>
      <div className="relative pt-16">
        <div className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <p className="text-[9rem] max-laptop-1100:text-8xl max-tablet-700:text-7xl max-mobile:text-5xl uppercase bg-text-gradient text-transparent bg-clip-text font-extrabold opacity-60 z-0">
            support
          </p>
        </div>
        <p className="dark:text-white text-gray-650 text-center text-6xl max-laptop-1100:text-4xl max-mobile:text-2xl max-tablet-700:text-3xl font-extrabold z-10 relative">
          How can we help
        </p>
      </div>
      <div className="relative mx-auto w-4/5 mt-10 max-mobile:mt-5 z-10">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Ask a question"
          className="pl-8 rounded-2xl py-6 bg-gray-650 border-none text-gray-400 text-xl max-tablet-700:text-lg max-tablet-700:py-4 max-mobile:text-sm max-mobile:py-1"
        />
      </div>
    </div>
  );
};

export default Support;
