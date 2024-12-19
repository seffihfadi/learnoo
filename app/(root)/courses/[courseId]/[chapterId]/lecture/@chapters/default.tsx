import { getDataAction } from "@/actions/getActions";
import NotFound from "@/app/not-found";
import MarkReadForm from "@/components/forms/mark-as-read-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { Course } from "@/types/course";
import Link from "next/link";

interface Params {
  params: {
    courseId: string;
  }
}

export default async function DefaultChapters({params}: Params) {
  const { courseId } = await params
  const course = await getDataAction<Course>(`/courses/${courseId}`, "append_with=chapters")
  if (!course) return <NotFound />
  const chapters = course.chapters
  if (!chapters) return null

  return (
    <div className="col-span-4">
      <div id="no-scroll" className="sticky overflow-y-auto top-[84px] h-[calc(100vh-104px)]">
        <Accordion type="single" collapsible className="w-full border-border border-2 rounded-xl">
          {chapters.map((chapter, i) => 
            <AccordionItem key={i} className="last-of-type:border-0 " value={`item-${i}`}>
              <AccordionTrigger className="p-5 !no-underline">
                <div className="">
                  <h5 className="text-lg">{chapter.title}</h5>
                  <p className="text-muted-foreground">Chapter {i+1} &bull; {chapter.id} hours</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 text-base">
                <ul className="text">
                  {chapter.lessons?.map((lesson, j) =>
                    <li key={j} className="flex items-center gap-4 mb-3">
                      <MarkReadForm lesson={lesson} />
                      <Link href={`/courses/${course.id}/${chapter.id}/lecture/${lesson.id}`} className="flex flex-col hover:[&>p]:text-primary">
                        <p className="transition-colors">{lesson.title}</p>
                        <span className="text-muted-foreground text-sm">{lesson.id}m</span>
                      </Link>
                    </li>
                  )}
                  {chapter.test &&
                    <li className="flex items-center gap-4 mb-3">
                      <div className="flex-shrink-0 course_check">
                        <input type="checkbox" name="i" id="readed" />
                        <label className="cursor-pointer" htmlFor="readed">
                          <div>
                            <i className="uil uil-notes text-[15px] video"></i>
                            <i className="uil uil-check text-[18px] check hidden"></i>
                          </div>
                        </label>
                      </div> 
                      <div className="flex flex-col">
                        <Link className="hover:text-primary transition-colors" href={`/courses/${course.id}/${chapter.id}/test/1`}>Final Test</Link>
                        <span className="text-muted-foreground">20Q</span>
                      </div>
                    </li>
                  }
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </div>
  )
}
