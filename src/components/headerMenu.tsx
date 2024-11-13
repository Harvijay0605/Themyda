import { HEADER_MENU } from "@/lib/constant";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeaderMenu = () => {
  return (
    <div className="grid grid-cols-3 max-phablet:grid-cols-1 gap-20 max-tablet-900:gap-16 justify-center px-5">
      {HEADER_MENU.map((item) => (
        <div className="relative col-span-1" key={item.id}>
          <div
            className={cn(
              "absolute top-0 -left-3 rounded-xl w-full h-full bg-indigo-950 -rotate-6",
              item.id === 1 && "bg-blue-750 border-2 border-indigo-550",
              item.id === 2 && "bg-cyan-350 border-2 border-cyan-350",
              item.id === 3 && "bg-indigo-950 border-2 border-red-450"
            )}
            style={{
              clipPath: "polygon(0 0, 35% 0, 100% 50%, 100% 100%, 0 100%)",
              backgroundColor:
                item.id === 1
                  ? "rgba(29, 78, 216, 0.05)"
                  : item.id === 2
                  ? "rgba(6, 182, 212, 0.05)"
                  : "rgba(24, 13, 73, 1)",
            }}
          ></div>
          <Card
            className={cn(
              "bg-indigo-950 text-white relative pb-5",
              item.id === 1 && "border-2 border-indigo-550",
              item.id === 2 && "border-2 border-cyan-350",
              item.id === 3 && "border-2 border-red-450"
            )}
          >
            <div
              className={cn(
                "absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-40",
                "max-laptop-1050:w-32 max-laptop-1050:h-36",
                "max-tablet-900:w-24 max-tablet-900:h-28",
                "max-phablet:w-32 max-phablet:h-36",
                "max-mobile:w-24 max-mobile:h-28"
              )}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                // width={151}
                // height={158}
                fill
                className=""
              />
            </div>
            <h1
              className={cn(
                "text-center text-2xl font-bold capitalize mt-24",
                "max-tablet-900:mt-20 text-xl",
                "max-phablet:mt-24",
                "max-mobile:mt-20"
              )}
            >
              {item.title}
            </h1>
            <p className="text-center text-base max-tablet-900:text-sm">{item.description}</p>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
