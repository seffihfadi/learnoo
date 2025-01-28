import { getDataAction } from "@/actions/getActions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Test } from "@/types/test";
import Link from "next/link";
import InstQuestion from "@/components/ui/InstQuestion";
import QuestionForm from "@/components/forms/QuestionForm";

export default async function ChapterAddTest({
  params,
}: {
  params: Promise<{ courseId: string; chapterId: string }>;
}) {
  const { courseId, chapterId } = await params;
  const test = await getDataAction<Test | null>(
    `/courses/${courseId}/chapters/${chapterId}/test`,
    "&append_with=questions,chapter"
  );
  //  if (test){
  //   const chapterTest=test.filter((t)=>t.chapterID==parseInt(chapterId))}

  return (
    <section className="flex">
      <div className="max-w-3xl w-full mx-auto">
        <div className="flex items-center gap-3 my-5">
          <i className="uil uil-notes text-[30px]"></i>
          <h1 className="text-2xl">{test?.chapter?.title} Test</h1>
          <p className="text-2xl font-semibold ml-auto">{test?.questions.length}Q</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
        <QuestionForm courseId={courseId} chapterId={chapterId}/>
          {test &&
            test?.questions.map((q) => {
              return <InstQuestion question={q} key={q.id} />;
            })}
        </Accordion>
      </div>
    </section>
  );
}
