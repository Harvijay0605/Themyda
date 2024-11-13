import React from "react";
import ThemeSwitcher from "@/components/theme/themeSwitcher";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTooltip from "@/components/common/tooltip";

const DarkNavbar = () => {
  return (
    <>
      <div className="hidden dark:max-tablet-900:hidden dark:flex gap-4 justify-between px-20 z-20 mt-5">
        <div className="flex justify-center items-center gap-4 ">
          <Image
            src="/Icons/darkModeLogo.png"
            alt="logo"
            width={168}
            height={40}
            sizes="168px"
          />
          <p className="text-muted-foreground hover:text-foreground cursor-pointer ">
            About
          </p>
          <p className="text-muted-foreground hover:text-foreground cursor-pointer ">
            Features
          </p>
          <p className="text-muted-foreground hover:text-foreground cursor-pointer ">
            Develop
          </p>
          <p className="text-muted-foreground hover:text-foreground cursor-pointer ">
            Community
          </p>
          <p className="text-muted-foreground hover:text-foreground cursor-pointer ">
            Blog
          </p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="uppercase cursor-pointer">Login</p>
          <button className="px-3 py-2 rounded-full bg-purple-400 hover:bg-purple-500 text-accordion-active">
            Register
          </button>
          <ThemeSwitcher />
        </div>
      </div>
      {/* for size 900 */}
      <div className="hidden dark:tablet-900:hidden dark:flex gap-4 justify-between px-5 z-20 mt-5">
        <Image
          src="/Icons/darkModeLogo.png"
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
              <div className="flex flex-col h-full pb-6">
                <div className="flex flex-col gap-4 mt-4 overflow-x-auto flex-1">
                  <CommonTooltip text="About">
                    <Button variant="outline">
                      <span>About</span>
                    </Button>
                  </CommonTooltip>
                  <CommonTooltip text="Features">
                    <Button variant="outline">
                      <span>Features</span>
                    </Button>
                  </CommonTooltip>
                  <CommonTooltip text="Develop">
                    <Button variant="outline">
                      <span>Develop</span>
                    </Button>
                  </CommonTooltip>
                  <CommonTooltip text="Community">
                    <Button variant="outline">
                      <span>Community</span>
                    </Button>
                  </CommonTooltip>
                  <CommonTooltip text="Blog">
                    <Button variant="outline">
                      <span>Blog</span>
                    </Button>
                  </CommonTooltip>
                </div>
                <button className="px-3 py-2 rounded-full border-2 border-purple-400 hover:bg-purple-500 text-accordion-active mb-4">
                  Login
                </button>
                <button className="px-3 py-2 rounded-full bg-purple-400 hover:bg-purple-500 text-accordion-active">
                  Register
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default DarkNavbar;
