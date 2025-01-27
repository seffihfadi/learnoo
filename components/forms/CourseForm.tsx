// components/CourseForm.tsx
"use client"; // Mark this as a Client Component

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
import { useForm } from "react-hook-form";
import { Course } from "@/types/course";
import { Link } from "lucide-react";
import { createChapterAction } from "@/actions/courseActions";
import { useState } from "react";

export default  function CourseForm({ course }: { course: Course | null }) {
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [errorMessage, setErrorMessage] = useState<string | null>(null);
      const [successMessage, setSuccessMessage] = useState<string | null>(null);
    
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("title", data.title); 
    formData.append("description","jjjjjj")
 
    if (!course) {
      setErrorMessage("Course is not available.");
      return;
    }
    try{
        setIsSubmitting(true)
    const response = await createChapterAction(formData, course.id);
    if (response?.error) {
        setErrorMessage(response.error); // Set error message
      } else {
        setSuccessMessage("Course created successfully!"); // Set success message
        reset();
    
      }
    } catch (error) {
      setErrorMessage("An error occurred while creating the course."); // Set generic error message
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
 
  return (
    <>
    
    {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit) } className="grid grid-cols-12 gap-10">
   
   <div className="col-span-8">
     <Accordion type="single" collapsible className="w-full border-border border-2 rounded-xl">
       <div className="p-5 border-b-[1px] border-border">
         <div>
           <p className="text-muted-foreground">Module {course?.chapters ? course.chapters.length + 1 : 1}</p>
           <input
             {...register("title")}
             placeholder="JavaScript Programming with React"
             className="text-4xl bg-background outline-none w-full h-20"
             type="text"
             required
           />
           <button className="primary mt-5 !rounded-md !py-1">       {isSubmitting ? "Creating..." : "Create"}</button>
         </div>
       </div>
       {course?.chapters?.map((chapter, index) => (
         <AccordionItem key={chapter.id} value={`item-${index}`}>
           <AccordionTrigger className="p-5 !no-underline">
             <div>
               <p className="text-muted-foreground">Module {index + 1}</p>
               <h5 className="text-xl">{chapter.title}</h5>
               <div className="flex gap-2 mt-5">
                 <Link href={`/inst/courses/create/${course.id}/${chapter.id}`} className="px-2 py-1 rounded-md bg-primary capitalize text-white">
                   Add Lecture
                 </Link>
                 <Link href={`/inst/courses/create/${course.id}/test`} className="px-2 py-1 rounded-md bg-green-600 text-white capitalize">
                   Create Test
                 </Link>
               </div>
             </div>
           </AccordionTrigger>
           {chapter?.lessons?.map((lesson) => (
             <AccordionContent key={lesson.id} className="px-5 text-base">
               <ul className="text">
                 <li className="flex items-center gap-4 mb-3">
                   <i className="uil uil-airplay text-[20px]"></i>
                   <div className="flex flex-col">
                     <Link href={`/inst/courses/${course.id}/lecture/${lesson.id}`}>{lesson.title}</Link>
                     <span className="text-muted-foreground text-sm">{Math.floor(Math.random() * 60) + 1}m</span>
                   </div>
                 </li>
               </ul>
             </AccordionContent>
           ))}
         </AccordionItem>
       ))}
     </Accordion>
   </div>
 </form></>


  );
}