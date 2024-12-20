import Image from "next/image";
import Link from "next/link";

export default function Courses() {
  return (
    <section>
      <h1 className="text-3xl my-8">Created Courses</h1>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 shadow-md rounded-lg overflow-hidden">
          <div className="w-full aspect-video overflow-hidden">
            <Image className="w-full h-full object-cover" src="/imgs/learn (9).jpg" alt="" width={500} height={500} />
          </div>
          <div className="p-4">
            <Link href="/inst/courses/145">
              <h5 className="font-semibold mb-1">JavaScript Programming with React, Node & MongoDB</h5>
              <div className="flex items-center">
                <i className="uil uil-star text-[18px] text-yellow-500"></i>
                <span className="mx-1 text-sm font-semibold">4.5</span>
                <span className="text-sm text-muted-foreground">(12 reviews)</span>
              </div>
              <div className="flex items-center justify-between mt-5">
                <span className="text-green-600">350 Enrolled</span>
                <span className="text-sm font-semibold text-red-500">(4)</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-3 border-border border-[1px] border-dashed rounded-lg overflow-hidden">
          <div className="w-full aspect-video overflow-hidden">
            <Image className="w-full h-full object-cover" src="/imgs/learn (5).jpg" alt="" width={500} height={500} />
          </div>
          <div className="p-4 h-full bg-muted shadow-md">
            <Link href="/inst/courses/create/30">
              <h5 className="font-semibold mb-1">Node & MongoDB Full Course</h5>
              <div className="flex items-center justify-between">
                <span className="text-sm capitalize font-semibold text-primary bg-blue-200 rounded-sm px-2 py-.5">in progress</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
