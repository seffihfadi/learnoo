import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDropzone } from "react-dropzone";
import LessonForm from "@/components/forms/lessonForm";
import { getDataAction } from "@/actions/getActions";
import { Course } from "@/types/course";
export default async function ChapterAddLecture({ params }: { params: { courseId: string ,chapterId:string } }) {
  const course = await getDataAction<Course | null>(`/courses/${params.courseId}`, "&append_with=chapters,learners");
const ch=params.chapterId
  return (
    <section className="flex">
    <LessonForm course={course} chapterId={ch}/>

    </section>
  )
}
