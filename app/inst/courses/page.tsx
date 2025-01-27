import  { getDataAction } from "@/actions/getActions";
import type { Course, Courses } from "@/types/course";
import { Author } from "@/types/user";

import Image from "next/image";
import Link from "next/link";

export default async function Courses() {

  const data:Courses|null = await getDataAction<Courses>(`/courses`, `&append_with=image,author`)
  
  return (
    <section>
      <h1 className="text-3xl my-8">Created Courses</h1>
      <div className="grid grid-cols-12 gap-5">
        { data?.courses.map((course, i) => (
        <div className="col-span-3 shadow-md rounded-lg overflow-hidden" key={i}>
        <div className="w-full aspect-video overflow-hidden">
          <Image className="w-full h-full object-cover" src={course.image?course.image.url:""} alt="" width={500} height={500} />
        </div>
        <div className="p-4">
          <Link href="/inst/courses/145">
                <h5 className="font-semibold mb-1">{course.title}</h5>
            <div className="flex items-center">
              <i className="uil uil-star text-[18px] text-yellow-500"></i>
                  <span className="mx-1 text-sm font-semibold">{ course.rate}</span>
              <span className="text-sm text-muted-foreground">({course.raters_count} reviews)</span>
            </div>
            <div className="flex items-center justify-between mt-5">
              <span className="text-green-600">{Array.isArray(course.learners) ? course.learners.length : course.learners || 0} Enrolled</span>
              <span className="text-sm font-semibold text-red-500">(4)</span>
            </div>
          </Link>
        </div>
      </div>
    
        ))}

      </div>
    </section>
  )
}
