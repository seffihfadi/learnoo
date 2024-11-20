import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import RaitingDisplay from "@/components/common/raiting-display"

export default function LectureLayout({
  children,
  tab
}: {
  children: React.ReactNode,
  tab: React.ReactNode
}) {
  return (
    <section>
      <div className="container grid grid-cols-12 gap-5 my-5">
        <div className="col-span-8">
          <div className="video">
            <video controls className="rounded-xl" src="/videos/vid.mp4"></video>
            <h1 className="text-2xl mt-4 font-semibold">Filtering data using AND, OR and NOT logical operators</h1>
          </div>
          <Tabs defaultValue="notes" className="w-full my-4">
            <TabsList>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="forum">Lecture Forum</TabsTrigger>
            </TabsList>
            <TabsContent className="py-5" value="notes">
              <button className="create_note">
                <p>Create a note at: <span className="text-muted-foreground font-semibold">0.00</span></p>
                <div className="flex items-center justify-center p-2 bg-primary w-8 h-8 rounded-full">
                  <i className="uil uil-plus text-background text-[20px]"></i>
                </div>
              </button>
              <div className="notes my-10">

                <div className="my-2">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-full bg-primary px-2 py-.5 text-white font-semibold">
                      0.00
                    </div>
                    <span className="text-muted-forground text-sm">2 days ago</span>
                    <button className="ml-auto rtl:mr-auto"><i className="uil uil-pen text-[20px]"></i></button>
                    <button><i className="uil uil-trash-alt text-[20px]"></i></button>
                  </div>
                  <div className="border-l-2 border-border pl-5">
                    <p className="max-w-3xl text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam aspernatur veniam id ratione exercitationem eligendi facere quis quos. Inventore velit, porro nemo maiores numquam aut ipsa obcaecati repellat dolor.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent className="py-5" value="forum">
              <div className="comment my-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-9 aspect-square overflow-hidden">
                    <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={100} height={100} />
                  </div>
                  <h5 className="font-semibold">Seffih Fadi <span className="text-sm text-muted-foreground mx-2">Oct 22, 2024</span></h5>
                </div>
                <p className="max-w-3xl text-lg my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis totam aspernatur veniam id ratione exercitationem eligendi facere quis quos. Inventore velit, porro nemo maiores numquam aut ipsa obcaecati repellat dolor.</p>
                <div className="flex items-center gap-2">
                  <button className=""><i className="uil uil-thumbs-up text-[20px]"></i></button>
                  <span>15</span>
                  <button className="mx-3"><i className="uil uil-thumbs-down text-[20px]"></i></button>
                </div>
                <div className="reviews pl-8 border-l-2 border-border">
                  <div className="my-5">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full w-7 aspect-square overflow-hidden">
                        <Image className="w-full h-full object-cover" src="/imgs/learn (6).jpg" alt="" width={100} height={100} />
                      </div>
                      <h5 className="font-semibold">Mohammed Ouchene <span className="text-sm text-muted-foreground mx-2">Oct 22, 2024 at 11 AM</span></h5>
            
                    </div>
                    <p className="max-w-3xl my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.</p>
                    <div className="flex items-center mt-3 gap-2">
                      <button><i className="uil uil-thumbs-up text-[20px]"></i></button>
                      <span>15</span>
                      <button className="mx-3"><i className="uil uil-thumbs-down text-[20px]"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          {tab}
        </div>
        <div className="col-span-4">
          <div id="no-scroll" className="sticky overflow-y-auto top-[84px] h-[calc(100vh-104px)]">

            <Accordion type="single" collapsible className="w-full border-border border-2 rounded-xl">
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
                      <div className="flex-shrink-0 course_check">
                        <input type="checkbox" name="i" id="readed" />
                        <label className="cursor-pointer" htmlFor="readed">
                          <div>
                            <i className="uil uil-presentation-play text-[15px] video"></i>
                            <i className="uil uil-check text-[18px] check hidden"></i>
                          </div>
                        </label>
                      </div>
                      <div className="flex flex-col">
                        <p>Introduction to the program</p>
                        <span className="text-muted-foreground">1m</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4 mb-3">
                      <div className="flex-shrink-0 course_check">
                        <input type="checkbox" name="i" id="readed" />
                        <label className="cursor-pointer" htmlFor="readed">
                          <div>
                            <i className="uil uil-presentation-play text-[15px] video"></i>
                            <i className="uil uil-check text-[18px] check hidden"></i>
                          </div>
                        </label>
                      </div>
                      <div className="flex flex-col">
                        <p>Filtering data using AND, OR and NOT logical operators</p>
                        <span className="text-muted-foreground">9m</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4 mb-3">
                      <div className="flex-shrink-0 course_check">
                        <input type="checkbox" name="i" id="readed" />
                        <label className="cursor-pointer" htmlFor="readed">
                          <div>
                            <i className="uil uil-presentation-play text-[15px] video"></i>
                            <i className="uil uil-check text-[18px] check hidden"></i>
                          </div>
                        </label>
                      </div>
                      <div className="flex flex-col">
                        <p>JOINS</p>
                        <span className="text-muted-foreground">5m</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4 mb-3">
                      <div className="flex-shrink-0 course_check">
                        <input type="checkbox" name="i" id="readed" />
                        <label className="cursor-pointer" htmlFor="readed">
                          <div>
                            <i className="uil uil-file-info-alt text-[15px] video"></i>
                            <i className="uil uil-check text-[18px] check hidden"></i>
                          </div>
                        </label>
                      </div>
                      <div className="flex flex-col">
                        <p>MySQL UNION operator</p>
                        <span className="text-muted-foreground">2m</span>
                      </div>
                    </li>
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
                        <p>Final Test</p>
                        <span className="text-muted-foreground">20Q</span>
                      </div>
                    </li>
                    
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="last-of-type:border-0 " value="item-2">
                <AccordionTrigger className="p-5 !no-underline">
                  <div className="">
                    <h5 className="text-lg">Updating databases and working with views</h5>
                    <p className="text-muted-foreground">Module 2 &bull; 20 hours</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-5 text-base">
                  <ul className="text-sm">
                    <li className="flex items-center gap-3 mb-3">
                      <i className="uil uil-presentation-play"></i>
                      <p>Introduction to the program</p>
                      <span className="text-muted-foreground ml-auto">1m</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <i className="uil uil-presentation-play"></i>
                      <p>Filtering data using AND, OR and NOT logical operators</p>
                      <span className="text-muted-foreground ml-auto">9m</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <i className="uil uil-presentation-play"></i>
                      <p>JOINS</p>
                      <span className="text-muted-foreground ml-auto">5m</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <i className="uil uil-file-info-alt"></i>
                      <p>MySQL UNION operator</p>
                      <span className="text-muted-foreground ml-auto">2m</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <i className="uil uil-notes"></i>
                      <p>Final Test</p>
                      <span className="text-muted-foreground ml-auto">20Q</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            
            </Accordion>
          </div>
        </div>
        {/* <div className="col-span-3">
          akdjgka
        </div> */}
      </div>
    </section>
  )
}
