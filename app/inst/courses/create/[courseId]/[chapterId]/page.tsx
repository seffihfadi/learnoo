import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDropzone } from "react-dropzone";
import LessonForm from "@/components/forms/lessonForm";
import { getDataAction } from "@/actions/getActions";
import { Course } from "@/types/course";
export default async function ChapterAddLecture({ params }: { params: Promise< { courseId: string ,chapterId:string } >}) {
  const {courseId,chapterId} = await params;
  const course = await getDataAction<Course | null>(`/courses/${courseId}`, "&append_with=chapters,learners");

  return (
    <section className="flex">
    <LessonForm course={course} chapterId={chapterId}/>

    </section>
  )
}
