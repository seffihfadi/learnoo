import RaitingDisplay from "@/components/common/raiting-display";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getDataAction } from "@/actions/getActions";
import type { Course } from "@/types/course";
import NotFound from "@/app/not-found";
import { formatDate, getLanguageName } from "@/lib/utils";
import EnrollForm from "@/components/forms/enroll-form";

interface Params {
  params: {
    courseId: string
  }
  
}

export default async function Cours({ params }: Params) {
  const { courseId } = await params
  const course = await getDataAction<Course>(`/courses/${courseId}`, 'append_with=video,author,categories,chapters,learners,requirements,objectives')
  // console.dir(course, {depth: 4})
  if (!course) return <NotFound />
  return (
    <section>
      <div className="bg-muted">
        <div className="grid grid-cols-12 py-10 container">
          <div className="col-span-7">
            <div className="flex gap-2 items-center">
              <div className="rounded-full w-9 aspect-square overflow-hidden">
                <Image className="w-full h-full object-cover" src="/imgs/learn (11).jpg" alt="" width={100} height={100} />
              </div>
              <p className="font-semibold">{course.author?.user?.full_name}</p>
            </div>
            <h1 className="text-4xl font-semibold mt-3">{course.title}</h1>
            <p className="text-lg my-3">{course.description}</p>
            <div className="flex items-center">
              <span className="font-semibold">{course.rate}</span>
              <RaitingDisplay rate={course.rate} />
              <span className="text-sm">({course.raters_count} reviews)</span>
            </div>
            <div className="flex items-center mt-3 justify-between">
              <EnrollForm courseId={course.id} />
              <h4 className="text-4xl font-bold">{course.price}DZD</h4>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-10">
              <div className="flex gap-2 items-center">
                <i className="uil uil-history-alt text-[20px]"></i>
                <p>Last update <span className="font-semibold">{formatDate(course.updated_at)}</span></p>
              </div>
              <div className="flex gap-2 items-center">
                <i className="uil uil-language text-[20px]"></i>
                <p>{getLanguageName(course.language)}</p>
              </div>
              <div className="flex gap-2 items-center">
                <i className="uil uil-briefcase text-[20px]"></i>
                <p><span className="font-semibold">{course.learners?.length}</span> already enrolled</p>
              </div>
            </div>
          </div>
          <div className="col-span-5 flex items-center justify-end">
            <video controls className="rounded-xl w-[70%] border-8 border-border shadow-2xl" src={course?.video?.url}></video>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="my-10">
        <h3 className="text-xl font-semibold">Prerequisites</h3>
          <div className="grid grid-cols-12">
            <ul className="col-span-8 grid grid-cols-2 gap-6 my-6">
              {course.objectives?.map((objective, i) =>
                <li key={objective.id} className="col-span-1 flex gap-2 items-center">
                  <i className="uil uil-check text-green-500"></i>
                  <p>{objective.content}</p>
                </li>
              )}
            </ul>
          </div>
          <h3 className="text-xl font-semibold">What you'll learn</h3>
          <div className="grid grid-cols-12">
            <ul className="col-span-8 grid grid-cols-2 gap-6 my-6">
              {course.objectives?.map((objective, i) =>
                <li key={objective.id} className="col-span-1 flex gap-2 items-center">
                  <i className="uil uil-check text-green-500"></i>
                  <p>{objective.content}</p>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-semibold">There are {course.chapters?.length} chapters in this course</h3>
          <div className="grid grid-cols-12">
            <div className="col-span-8">
              
              <Accordion type="single" collapsible className="w-full border-border border-2 rounded-xl my-5">
                {course.chapters?.map((chapter, i) =>
                  <AccordionItem className="last-of-type:border-0" key={i} value={`item-${i}`}>
                    <AccordionTrigger className="p-5 !no-underline">
                      <div className="">
                        <h5 className="text-lg">{chapter.title}</h5>
                        <p className="text-muted-foreground">Chapter {i+1} &bull; 9 hours</p>
                      </div>

                    </AccordionTrigger>
                    <AccordionContent className="px-5 text-base">
                      <ul>
                        {chapter.lessons?.map((lesson, j) =>
                          <li key={j} className="flex items-center gap-3 mb-3">
                            {lesson.is_video ? <i className="uil uil-airplay"></i> : <i className="uil uil-file-info-alt"></i>}
                            <p>{lesson.title}</p>
                            <span className="text-muted-foreground ml-auto">1m</span>
                          </li>
                        )}
                        
                        <li className="flex items-center gap-3 mb-3">
                          <i className="uil uil-notes"></i>
                          <p>Final Test</p>
                          <span className="text-muted-foreground ml-auto">20Q</span>
                        </li> 
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                )}
                
                
              </Accordion>
            </div>
          </div>
        </div>
        <div className="my-10">
          <h3 className="text-2xl font-semibold">Recomemded courses</h3>
          <div className="grid grid-cols-12">

          </div>
        </div>

        <div className="my-10">
          <h3 className="text-2xl font-semibold">Learners reviews</h3>
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-8">
              <div className="comment my-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-9 aspect-square overflow-hidden">
                    <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={100} height={100} />
                  </div>
                  <h5 className="font-semibold">Seffih Fadi</h5>
                </div>
                <div className="flex items-center my-1 gap-2">
                  <RaitingDisplay rate={1} />
                  <span className="text-muted-forground text-sm">2 days ago</span>
                </div>
                <p className="max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam aspernatur veniam id ratione exercitationem eligendi facere quis quos. Inventore velit, porro nemo maiores numquam aut ipsa obcaecati repellat dolor.</p>
                <div className="flex justify-between items-center mt-3 gap-2">
                  <p className="font-semibold">Was this helpfull?</p>
                  <button className="lite ml-auto">yes</button>
                  <button className="lite">no</button>
                </div>
                <div className="reviews pl-8 border-l-2 border-border">
                  <div className="my-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full w-9 aspect-square overflow-hidden">
                        <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={100} height={100} />
                      </div>
                      <h5 className="font-semibold">Seffih Fadi</h5>
                    </div>
                    <div className="flex items-center my-1 gap-2">
                      <RaitingDisplay rate={1} />
                      <span className="text-muted-forground text-sm">2 days ago</span>
                    </div>
                    <p className="max-w-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam aspernatur veniam id ratione exercitationem eligendi facere quis quos. Inventore velit, porro nemo maiores numquam aut ipsa obcaecati repellat dolor.</p>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-span-4">
              <div className="sticky top-20">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <h4 className="text-5xl font-bold">4.5</h4>
                    <RaitingDisplay rate={3.5} />
                    <span className="text-muted-forground">1200</span>
                  </div>
                  <div className="w-full">
                    {Array.from({ length: 5 }).map((_, i) => 
                    <div key={i} className="flex items-center gap-2">
                      <span className="font-bold w-3">{i+1}</span>
                      <div className="w-full rounded-full h-2.5 bg-muted">
                        <div className="w-3/4 h-full rounded-full bg-secondary"></div>
                      </div>
                    </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
