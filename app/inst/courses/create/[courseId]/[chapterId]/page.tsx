import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDropzone } from "react-dropzone";
import LessonForm from "@/components/forms/lessonForm";
export default function ChapterAddLecture() {
  
  return (
    <section className="flex">
    <LessonForm/>

    </section>
  )
}
