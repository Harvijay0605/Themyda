import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const SubmitRequest = () => {
  return (
    <Card className="bg-gradient-to-b from-blue-750 from-40% to-teal-350 to-210%">
      <CardContent>
        <Image
          src="/Images/illustration.png"
          alt="girl searching her issues..."
          className="w-[calc(100% + 30px)]"
          width={389}
          height={286}
          sizes="(min-width: 1340px) 258px, calc(24.02vw - 59px)"
        />
        <h3 className="text-center text-lg mb-2">
          Still no luck? We can help!
        </h3>
        <p className="text-center text-sm">
          Contact us and we&apos;ll get back to you soon as possible.
        </p>
        <button className="rounded-full capitalize bg-teal-350 hover:bg-teal-300 w-full p-2 text-background text-base mt-3">submit a request</button>
      </CardContent>
    </Card>
  );
};

export default SubmitRequest;
{
  /* <Image
                src="/Asserts/Images/company-profile-img.jpg"
                alt="company profile image"
                className="rounded-t-[30px] w-full"
                width={575}
                height={353}
              /> */
}
