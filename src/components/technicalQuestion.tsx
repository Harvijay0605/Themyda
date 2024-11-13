import React from "react";
import CustomAccordion from "./common/customAccordion";
import { QUESTION_LIST } from "@/lib/constant";

const TechnicalQuestion = () => {
  return (
    <section id="technical-question">
      <h1 className="capitalize text-2xl font-semibold mb-3">
        technical Questions
      </h1>
      <CustomAccordion question_list={QUESTION_LIST} />
    </section>
  );
};

export default TechnicalQuestion;
