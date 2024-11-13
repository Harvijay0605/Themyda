import React from "react";
import ThemeSwitcher from "@/components/theme/themeSwitcher";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { CirclePlus, Compass, Heart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTooltip from "@/components/common/tooltip";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const LightNavbar = () => {
  return (
    <>
      <div className="dark:hidden max-tablet-860:hidden flex gap-4 justify-between px-20 z-20 mt-5">
        <Image
          src="/Icons/lightModeLogo.png"
          alt="logo"
          width={168}
          height={40}
          sizes="168px"
        />
        <div className="relative flex">
          <Search className="absolute left-2.5 top-4 -translate-y-1/2 h-3 w-3 text-gray-500" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-8 rounded-s-md rounded-e-none h-8"
          />
          <button className="bg-blue-600 hover:bg-blue-700 rounded-e-md p-1 px-2 h-8 text-white text-sm">
            Search
          </button>
        </div>
        <div className="flex gap-3">
          <CommonTooltip text="Create">
            <Button variant="outline">
              <CirclePlus className="text-blue-600" />{" "}
              <span className="max-laptop-1100:hidden">Create</span>
            </Button>
          </CommonTooltip>
          <CommonTooltip text="Discover">
            <Button variant="outline">
              <Compass className="text-blue-600" />{" "}
              <span className="max-laptop-1100:hidden">Discover</span>
            </Button>
          </CommonTooltip>
          <CommonTooltip text="Favorites">
            <Button variant="outline">
              <Heart className="text-blue-600" />{" "}
              <span className="max-laptop-1100:hidden">Favorites</span>
            </Button>
          </CommonTooltip>
          <ThemeSwitcher />
          <CommonTooltip text="Login">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <User /> <span className="max-laptop-1100:hidden">Login</span>
            </Button>
          </CommonTooltip>
        </div>
      </div>
      {/* for screen size 860 */}
      <div className="dark:hidden tablet-860:hidden flex gap-4 justify-between px-5 z-20 mt-5">
        <Image
          src="/Icons/lightModeLogo.png"
          alt="logo"
          width={168}
          height={40}
          sizes="168px"
        />
        <div className="flex gap-4">
          <ThemeSwitcher />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="px-2">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle asChild>
                <Image
                  src="/Icons/lightModeLogo.png"
                  alt="logo"
                  width={150}
                  height={20}
                  sizes="150px"
                />
              </SheetTitle>
              <div className="flex flex-col gap-4 mt-4">
                <CommonTooltip text="Create">
                  <Button variant="outline">
                    <CirclePlus className="text-blue-600" /> <span>Create</span>
                  </Button>
                </CommonTooltip>
                <CommonTooltip text="Discover">
                  <Button variant="outline">
                    <Compass className="text-blue-600" /> <span>Discover</span>
                  </Button>
                </CommonTooltip>
                <CommonTooltip text="Favorites">
                  <Button variant="outline">
                    <Heart className="text-blue-600" /> <span>Favorites</span>
                  </Button>
                </CommonTooltip>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default LightNavbar;
