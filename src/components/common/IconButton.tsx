import { cn } from "@/lib/utils";
import React from "react";

type propsType = {
  children: React.ReactNode;
  className: string;
};

const IconButton: React.FC<propsType> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "rounded-full cursor-pointer p-2 flex justify-center items-center aspect-square",
        className
      )}
    >
      {children}
    </div>
  );
};

export default IconButton;
