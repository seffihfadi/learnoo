import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"



export default function ChapterAddTest() {
  return (
    <section className="flex">
      <div className="max-w-3xl w-full mx-auto">  
        <div className="flex items-center gap-3 my-5">
          <i className="uil uil-notes text-[30px]"></i>
          <h1 className="text-2xl">Chapter Test</h1>
          <p className="text-2xl font-semibold ml-auto">5Q</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
            <div className="p-5 border-b-[1px] border-border">
              <div className="">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground text-lg">#2</span>
                  <input className="text-lg bg-background outline-none w-full placeholder:text-muted-foreground" placeholder=" Lequel des cas suivants est une attaque dans laquelle?" type="text" />
                  {/* <p className="text-green-600 text-lg ml-auto">30s</p> */}
                  <input className="w-8 bg-background outline-none text-green-600 text-lg ml-auto" defaultValue={30} type="text" />
                  <span className="text-green-600 text-lg">s</span>
                </div>
                <textarea rows={3} className="w-full bg-background outline-none mt-4" placeholder="Quos quas totam explicabo quae reiciendis neque dolorem nostrum delectus facere eaque accusamus, illo libero natus tempore dicta blanditiis modi quibusdam architecto" name="" id=""></textarea>
                <div className="pl-5">
                  <button className="rounded-full px-3 py-1 bg-primary text-sm text-white capitalize flex items-center gap-2">
                    <i className="uil uil-plus text-[15px]"></i>
                    add choice
                  </button>
                  <ul className="list-decimal pl-10 [&>li]:my-1 mt-5">
                    <li>Interception <span className="text-green-500">(true)</span></li>
                    <li>Modification</li>
                    <li className="relative">  
                      <input className="outline-none bg-background w-full pr-20" placeholder="Create Choice 3" type="text" />
                      <div className="absolute right-0 top-0 flex items-center gap-2">
                        <label className="text-sm font-bold" htmlFor="istrue">Is True</label>
                        <input className="" type="checkbox" name="" id="istrue" />
                      </div>
                    </li>
                  </ul>
                </div>
                <button className="primary mt-5 !rounded-md !py-1">Create New</button>
              </div>
            </div>
            <AccordionItem value="item-1">
              <AccordionTrigger className="p-5 !no-underline">
                <div className="w-full">
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground text-lg">#1</span>
                    <h5 className="text-lg">What is cybersecurity, and why is it important?</h5>
                    <p className="text-green-600 text-lg ml-auto">30s</p>
                  </div>
                  <div className="flex gap-2 mt-5">
                    <Link href="/inst/courses/create/1/test" className="px-2 py-1 rounded-md bg-primary capitalize text-white">edit</Link>
                    <Link href="/inst/courses/create/1/test" className="px-2 py-1 rounded-md bg-red-600 text-white capitalize">delete</Link>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 text-base">
                <p className="text-muted-foreground">Quos quas totam explicabo quae reiciendis neque dolorem nostrum delectus facere eaque accusamus, illo libero natus tempore dicta blanditiis modi quibusdam architecto.</p>
                <ul className="text mt-5 list-decimal pl-10 [&>li]:my-1">
                  <li>Interruption Lorem ipsum dolor sit amet consectetur, adipisicing vero provident eum!</li>
                  <li>Interception</li>
                  <li>Modification <span className="text-green-500">(true)</span></li>
                  <li>Lorem ipsum, dolor sit amet consectetur.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
          </Accordion>
      </div>
    </section>
  )
}
