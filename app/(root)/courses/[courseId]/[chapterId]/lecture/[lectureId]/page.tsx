import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getDataAction } from "@/actions/getActions"
import { Lesson } from "@/types/course"
import NotFound from "@/app/not-found"

import LectureContent from "@/components/custom/lecture-content"
import LectureForums from "@/components/custom/lecture-forums"
import LectureNotes from "@/components/custom/lecture-notes"

interface PageProps {
  params: {
    courseId: string
    chapterId: string
    lectureId: string
  }
}

export default async function Lecture({params}: PageProps) {

  const  { courseId, chapterId, lectureId } = params
  const lecture = await getDataAction<Lesson>(`/courses/${courseId}/chapters/${chapterId}/lessons/${lectureId}`, "");
  // console.log('lecture', lecture)
  if (!lecture) return <NotFound />
  return (
    <>
      <div className="col-span-8">
        <LectureContent lecture={lecture} />
        <Tabs defaultValue="notes" className="w-full my-4">
          <TabsList>
            <TabsTrigger value="notes">Notes</TabsTrigger>
            <TabsTrigger value="forum">Lecture Forum</TabsTrigger>
          </TabsList>
          <TabsContent className="py-5" value="notes">
            <LectureNotes />
          </TabsContent>
          <TabsContent className="py-5" value="forum">
            <LectureForums />
          </TabsContent>
        </Tabs>
      </div>
      
    </>
  )
}
