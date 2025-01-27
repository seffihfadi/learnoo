import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import RaitingDisplay from "@/components/common/raiting-display"
import { getDataAction } from "@/actions/getActions"
import { Course } from "@/types/course"

export default async function CourseContent({ params }: { params: { courseId: string } }) {

  const course = await getDataAction<Course|null>(`/courses/${params.courseId}`,"&append_with=chapters,learners")

  return (
    <section>
      {/* <h1 className="text-3xl my-8">JavaScript Programing and React Full Course</h1> */}
      <Breadcrumb className="py-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Courses</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">{course?.title}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between items-center mb-5">
        <Link href="/inst/courses/145/learners" className="text-green-600 text-3xl hover:text-green-500"> {course?.learners?.length} Enrolled</Link>
        <div className="flex gap-2 items-center">
          <span className="text-4xl">{course?.rate}</span>
          <div className="flex flex-col items-center">
            <RaitingDisplay rate={4} />
            <Link href={`/inst/courses/${params.courseId}`} className="text-muted-foreground hover:text-primary">(123 reviews)</Link>
          </div>
        </div>
      </div>
      <>
{ course?.chapters?.map((chapter,index)=>{
  return(
     <Accordion type="single" collapsible className="w-full border-border border-2 rounded-xl ">

     <AccordionItem value="item-1">
       <AccordionTrigger className="p-5 !no-underline">
         <div className="">
           <h5 className="text-lg">{chapter.title}</h5>
           <p className="text-muted-foreground">Module 1 &bull; 9 hours</p>
         </div>
       </AccordionTrigger>
       {chapter?.lessons?.map((lesson,index)=>{
return(
  <AccordionContent className="px-5 text-base">
  <ul className="text">
    <li className="flex items-center gap-4 mb-3">
      <i className="uil uil-airplay text-[20px]"></i>
      <div className="flex flex-col">
        <Link href={`/inst/courses/${params.courseId}/lecture/${lesson.id}`}>{lesson.title}</Link>
        <span className="text-muted-foreground text-sm">{Math.floor(Math.random() * 60) + 1}m</span>
      </div>
      {/* <Link className="ml-auto" href="/inst/courses/145/edit">
        <i className="uil uil-pen text-[20px]"></i>
      </Link>
      <Link href="/inst/courses/145/forums">
        <i className="uil uil-chat-info text-[20px]"></i>
      </Link> */}
    </li>
  
    
  </ul>
</AccordionContent>
)
       })}
   
     </AccordionItem>
   </Accordion>)
})}</>
 
    </section>
  )
}
