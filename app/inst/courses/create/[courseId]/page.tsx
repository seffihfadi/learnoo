import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function Chapters() {
  return (
    <section>
      <Breadcrumb className="py-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">JavaScript Programming with React</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Modules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8">
          <Accordion type="single" collapsible className="w-full border-border border-2 rounded-xl ">
            <div className="p-5 border-b-[1px] border-border">
              <div className="">
                <p className="text-muted-foreground">Module 2</p>
                <input className="outline-none bg-background w-full text-xl" type="text" placeholder="Lecture Name" />
                <button className="primary mt-5 !rounded-md !py-1">Create New</button>
              </div>
            </div>
            <AccordionItem value="item-1">
              <AccordionTrigger className="p-5 !no-underline">
                <div className="">
                  <p className="text-muted-foreground">Module 1</p>
                  <h5 className="text-xl">Introduction to MySQL</h5>
                  <div className="flex gap-2 mt-5">
                    <Link href="/inst/courses/create/1/2" className="px-2 py-1 rounded-md bg-primary capitalize text-white">add lecture</Link>
                    <Link href="/inst/courses/create/1/test" className="px-2 py-1 rounded-md bg-green-600 text-white capitalize">create test</Link>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 text-base">
                <ul className="text mt-5">
                  <li className="flex items-center gap-4 mb-3">
                    <i className="uil uil-airplay text-[20px]"></i>
                    <div className="flex flex-col">
                      <Link href="/courses/14/lecture/1">Introduction to the program</Link>
                      <span className="text-muted-foreground text-sm">1m</span>
                    </div>
                    {/* <Link className="ml-auto" href="/inst/courses/145/edit">
                      <i className="uil uil-pen text-[20px]"></i>
                    </Link>
                    <Link href="/inst/courses/145/forums">
                      <i className="uil uil-chat-info text-[20px]"></i>
                    </Link> */}
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
          
        </div>
      </div>


    </section>
  )
}
