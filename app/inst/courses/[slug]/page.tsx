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

export default function CourseContent() {
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
            <BreadcrumbLink href="/components">JavaScript Programming with React, Node & MongoDB</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex justify-between items-center mb-5">
        <Link href="/inst/courses/145/learners" className="text-green-600 text-3xl hover:text-green-500">310 Enrolled</Link>
        <div className="flex gap-2 items-center">
          <span className="text-4xl">4.0</span>
          <div className="flex flex-col items-center">
            <RaitingDisplay rate={4} />
            <Link href="/inst/courses/145/reviews" className="text-muted-foreground hover:text-primary">(123 reviews)</Link>
          </div>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full border-border border-2 rounded-xl ">
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-5 !no-underline">
            <div className="">
              <h5 className="text-lg">Introduction to MySQL</h5>
              <p className="text-muted-foreground">Module 1 &bull; 9 hours</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 text-base">
            <ul className="text">
              <li className="flex items-center gap-4 mb-3">
                <i className="uil uil-airplay text-[20px]"></i>
                <div className="flex flex-col">
                  <Link href="/courses/14/lecture/1">Introduction to the program</Link>
                  <span className="text-muted-foreground text-sm">1m</span>
                </div>
                <Link className="ml-auto" href="/inst/courses/145/edit">
                  <i className="uil uil-pen text-[20px]"></i>
                </Link>
                <Link href="/inst/courses/145/forums">
                  <i className="uil uil-chat-info text-[20px]"></i>
                </Link>
              </li>
              <li className="flex items-center gap-4 mb-3">
                <i className="uil uil-airplay text-[20px]"></i>
                <div className="flex flex-col">
                  <p>Filtering data using AND, OR and NOT logical operators</p>
                  <span className="text-muted-foreground text-sm">9m</span>
                </div>
                <i className="uil uil-pen ml-auto text-[20px]"></i>

              </li>
              <li className="flex items-center gap-4 mb-3">
                <i className="uil uil-airplay text-[20px]"></i>
                <div className="flex flex-col">
                  <p>JOINS</p>
                  <span className="text-muted-foreground text-sm">5m</span>
                </div>
              </li>
              <li className="flex items-center gap-4 mb-3">
                <i className="uil uil-airplay text-[20px]"></i>
                <div className="flex flex-col">
                  <p>MySQL UNION operator</p>
                  <span className="text-muted-foreground text-sm">2m</span>
                </div>
              </li>
              <li className="flex items-center gap-4 mb-3">
                
                <i className="uil uil-notes text-[20px]"></i>
                <div className="flex flex-col">
                  <p>Final Test</p>
                  <span className="text-muted-foreground text-sm">20Q</span>
                </div>
              </li>
              
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
