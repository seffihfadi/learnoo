// app/chapters/page.tsx
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { getDataAction } from "@/actions/getActions";
import { Course } from "@/types/course";
import CourseForm from "@/components/forms/CourseForm" // Import the Client Component

export default async function Chapters({ params }:  { params: Promise< { courseId: string } >}) {
  const {courseId} = await params;
  const course = await getDataAction<Course | null>(`/courses/${courseId}`, "&append_with=chapters,learners");

  return (
    <section>
      <Breadcrumb className="py-10">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{course?.title}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Modules</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Use the Client Component here */}
      <CourseForm course={course} />
      
    </section>
  );
}