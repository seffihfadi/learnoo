import type { Lesson } from "@/types/course";

export default function LectureContent({lecture}: {lecture: Lesson}) {
  return (
    <div className="video">
      {lecture.is_video && lecture.video
      ? 
        <video controls className="rounded-xl w-full" src={lecture.video.url}></video> 
      : 
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, nam iure? Nisi quidem non soluta sunt ipsam! Molestias consequuntur illo cumque eligendi optio assumenda, explicabo non alias, ratione, id sapiente?</p>}
      
      <h1 className="text-2xl mt-4 font-semibold">{lecture.title}</h1>
      <p className="text-muted-foreground mt-2 mb-4">{lecture.description}</p>
    </div>
  )
}
