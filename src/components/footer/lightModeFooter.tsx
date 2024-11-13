import Image from "next/image";
import React from "react";
import IconButton from "@/components/common/IconButton";

const LightModeFooter = () => {
  return (
    <div className="dark:hidden flex justify-between max-phablet:flex-col-reverse">
      <div className="flex flex-col gap-3">
        <Image
          src="/Icons/lightModeLogo.png"
          alt="logo"
          width={168}
          height={40}
          sizes="168px"
          className=""
        />
        <p className="text-sm w-2/5 max-phablet:w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          pariatur neque sequi, perspiciatis ipsam repellat?
        </p>
        <div className="flex gap-3 max-phablet:flex-wrap">
          <p className="text-sm font-medium">About us</p>
          <p className="text-sm font-medium">Blog</p>
          <p className="text-sm font-medium">Help</p>
          <p className="text-sm font-medium">Privacy & Policy</p>
          <p className="text-sm font-medium">Terms of use</p>
        </div>
        <p className="text-sm max-phablet:text-center max-phablet:mt-5">
          &copy; 2024 Themyda. All rights reserved
        </p>
      </div>
      <div className="max-phablet:flex max-phablet:gap-4 justify-between">
        <p className="font-bold ml-2">Get the app</p>
        <div>
          <Image
            src="/Images/footer-qr-code.png"
            alt="qr code"
            width={124}
            height={124}
            sizes="(min-width: 880px) 124px, calc(14.11vw + 3px)"
          />
          <div className="flex justify-end gap-1">
            <IconButton className="w-fit">
              <Image
                src="/Icons/lightModeLinkedin.png"
                alt="Linkedin icon"
                height={20}
                width={20}
                className="w-4 h-4"
                sizes="(min-width: 720px) 16px, calc(5vw - 19px)"
              />
            </IconButton>
            <IconButton className="w-fit">
              <Image
                src="/Icons/lightModeInstagram.png"
                alt="Instagram icon"
                height={20}
                width={20}
                className="w-4 h-4"
                sizes="(min-width: 720px) 16px, calc(5vw - 19px)"
              />
            </IconButton>
            <IconButton className="w-fit">
              <Image
                src="/Icons/tiktok.png"
                alt="tiktok icon"
                height={20}
                width={20}
                className="w-4 h-4"
                sizes="(min-width: 720px) 16px, calc(5vw - 19px)"
              />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightModeFooter;
