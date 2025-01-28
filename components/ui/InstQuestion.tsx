import { AccordionContent, AccordionItem, AccordionTrigger } from  "@/components/ui/accordion"
import { Question } from "@/types/test";
import Link from 'next/link'

import React from 'react'


const question: Question = {
  id: 1,
  content: "What is the organization that created Golang?",
  description: "it is not that hard",
  duration: 30,
  test_id: 2,
  options: [
    { id: 1, content: "google", is_correct: true, question_id: 1 },
    { id: 2, content: "facebook", is_correct: false, question_id: 1 },
    { id: 3, content: "twitter", is_correct: false, question_id: 1 },
    { id: 4, content: "microsoft", is_correct: false, question_id: 1 },
  ],
};

const InstQuestion : React.FC<{ question: Question }> = ({question}) => {
 
  return (
    <AccordionItem value="item-1">
      <AccordionTrigger className="p-5 !no-underline">
        <div className="w-full">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-lg">#1</span>
            <h5 className="text-lg">{question.content}</h5>
            <p className="text-green-600 text-lg ml-auto">{`${question.duration}s`}</p>
          </div>
          <div className="flex gap-2 mt-5">
            <Link href="/inst/courses/create/1/test" className="px-2 py-1 rounded-md bg-primary capitalize text-white">edit</Link>
            <Link href="/inst/courses/create/1/test" className="px-2 py-1 rounded-md bg-red-600 text-white capitalize">delete</Link>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-5 text-base">
        <p className="text-muted-foreground">{question.description}</p>
        <ul className="text mt-5 list-decimal pl-10 [&>li]:my-1">
          {question.options.map((option) => (
            <li key={option.id*100}>
              {option.content} {option.is_correct && <span className="text-green-500">(true)</span>}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
export default InstQuestion