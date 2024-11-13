import { TOPIC_LIST } from "@/lib/constant";
import React from "react";

const CommonTopicUI = () => {
  return (
    <div className="flex flex-col gap-4">
      {TOPIC_LIST.map((item, index) => (
        <p
          key={index}
          className="text-muted-foreground cursor-pointer hover:text-foreground"
        >
          {item.topic}
        </p>
      ))}
    </div>
  );
};

export default CommonTopicUI;
