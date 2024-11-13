import Image from "next/image";
import React from "react";
import IconButton from "@/components/common/IconButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const DarkModeFooter = () => {
  return (
    <div
      className={cn(
        "hidden dark:grid grid-cols-5 gap-5",
        "max-mobile:grid-cols-1"
      )}
    >
      <div
        className={cn(
          "col-span-1 h-fit",
          "max-laptop-1100:col-span-2",
          "max-mobile:col-span-1"
        )}
      >
        <Image
          src="/Icons/darkModeLogo.png"
          alt="logo"
          width={227}
          height={54}
          sizes="227px"
          className=""
        />
        <p className="text-sm my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          pariatur neque sequi, perspiciatis ipsam repellat?
        </p>
        <p className="text-sm">&copy; Imajin Theme 2023</p>
      </div>
      <div
        className={cn(
          "col-span-3 grid grid-cols-3 gap-5",
          "max-laptop-1100:row-start-2 max-laptop-1100:col-span-5",
          "max-mobile:col-span-1 max-mobile:grid-cols-1"
        )}
      >
        <div className="col-span-1">
          <h1 className="text-purple-250 text-xl font-bold uppercase mb-3">
            company
          </h1>
          <ul className="flex flex-col gap-3">
            <li>Donec dignissim</li>
            <li>Curabitur egestas</li>
            <li>Nam posuere</li>
            <li>Aenean facilisis</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="text-purple-250 text-xl font-bold uppercase mb-3">
            services
          </h1>
          <ul className="flex flex-col gap-3">
            <li>Cras convallis</li>
            <li>Vestibulum faucibus</li>
            <li>Quisque lacinia purus</li>
            <li>Aliquam nec ex</li>
          </ul>
        </div>
        <div className="col-span-1">
          <h1 className="text-purple-250 text-xl font-bold uppercase mb-L">
            resources
          </h1>
          <ul className="flex flex-col gap-3">
            <li>Suspendisse porttitor</li>
            <li>Nam posuere</li>
            <li>Curabitur egestas</li>
          </ul>
        </div>
      </div>
      <div
        className={cn(
          "col-span-1 h-fit",
          "max-laptop-1100:col-span-2 max-laptop-1100:col-start-4",
          "max-phablet:col-span-3",
          "max-mobile:row-start-1 max-mobile:col-start-1 max-mobile:col-span-1 h-fit"
        )}
      >
        <div className="flex gap-4 justify-between mb-4">
          <IconButton className="bg-gray-650 w-fit">
            <div className="w-6 h-6 flex justify-center">
              <Image
                src="/Icons/facebook.png"
                alt="facebook icon"
                height={20}
                width={10}
                className="w-3 h-6"
                sizes="(min-width: 720px) 16px, calc(5vw - 19px)"
              />
            </div>
          </IconButton>
          <IconButton className="bg-gray-650 w-fit">
            <Image
              src="/Icons/linkedin.png"
              alt="linkedin icon"
              height={20}
              width={20}
              className="w-6 h-6"
              sizes="(min-width: 720px) 16px, calc(5vw - 19px)"
            />
          </IconButton>
          <IconButton className="bg-gray-650 w-fit">
            <Image
              src="/Icons/twitter.png"
              alt="twitter icon"
              height={20}
              width={20}
              className="w-6 h-6"
              sizes="(min-width: 720px) 16px, calc(5vw - 19px)"
            />
          </IconButton>
          <IconButton className="bg-gray-650 w-fit">
            <Image
              src="/Icons/instagram.png"
              alt="instagram icon"
              height={20}
              width={20}
              className="w-6 h-6"
              sizes="(min-width: 720px) 16px, calc(5vw - 19px)"
            />
          </IconButton>
        </div>
        <Select>
          <SelectTrigger className="w-full bg-gray-650">
            <SelectValue placeholder="Select a Language" />
          </SelectTrigger>
          <SelectContent>
            <CustomSelectItem value="en" label="English - En" />
            <CustomSelectItem value="ro" label="Romanian - Ro" />
            <CustomSelectItem value="hi" label="Hindi - Hi" />
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DarkModeFooter;

type propsType = {
  label: string;
  value: string;
};

const CustomSelectItem: React.FC<propsType> = ({ label, value }) => (
  <SelectItem value={value}>
    <div className="flex gap-2 items-center">
      <IconButton className="w-fit inline-block">
        <Image
          src="/Icons/globe.png"
          alt="globe icon"
          height={10}
          width={10}
          className="w-5 h-5"
        />
      </IconButton>
      <p className="inline-block">{label}</p>
    </div>
  </SelectItem>
);
