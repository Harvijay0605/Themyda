import { QUESTION_LIST } from "@/lib/constant";
import CustomAccordion from "@/components/common/customAccordion";

const CommonQuestion = () => {
  return (
    <section id="common-question">
      <h1 className="capitalize text-2xl font-semibold mb-3">Common Questions</h1>
      <CustomAccordion question_list={QUESTION_LIST} />
    </section>
  );
};

export default CommonQuestion;
