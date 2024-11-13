import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { type questionType } from "@/types";

const CustomAccordion = <T extends questionType>({
  question_list,
}: {
  question_list: T[];
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {question_list.map((question) => (
        <AccordionItem
          key={question.id}
          value={question.id.toString()}
          className="border rounded overflow-hidden transition-colors bg-gray-350 dark:bg-gray-650 data-[state=open]:bg-accordion-active dark:data-[state=open]:bg-accordion-active data-[state=open]:text-primary-foreground mb-5 last:mb-0"
        >
          <Card className="bg-inherit text-inherit rounded border-none">
            <CardContent className="p-0">
              <AccordionTrigger className="px-4 py-2 hover:bg-muted/50 text-lg">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {question.answer}
              </AccordionContent>
            </CardContent>
          </Card>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
