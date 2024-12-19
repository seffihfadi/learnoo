import type { Lesson } from "@/types/course";

export default function MarkReadForm({lesson}: {lesson: Lesson}) {
  return (
    <div className="flex-shrink-0 course_check">
      <input type="checkbox" name={`r-${lesson.id}`} id={`r-${lesson.id}`} />
      <label className="cursor-pointer" htmlFor={`r-${lesson.id}`}>
        <div>
          {lesson.is_video ? <i className="uil uil-airplay text-[15px] video"></i> : <i className="uil uil-file-info-alt text-[15px] video"></i>}
          <i className="uil uil-check text-[18px] check hidden"></i>
        </div>
      </label>
    </div>
  )
}
