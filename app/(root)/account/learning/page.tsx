import Image from "next/image";
import Link from "next/link";
import CourseCardLearner from "../../../../components/ui/courseCardLearner";
import { getProfile } from "@/lib/func";
import { getDataAction } from "@/actions/getActions";
import { User } from "@/types/user";
export default async function  Learning() {
 const profile =  await getDataAction<User>(`/users/profiles/profile`, `&append_with=courses,author_profile,image`)
const courses = profile?.courses ||[]
console.log(profile)
   console.log('learning')
 
  return (
    <>
      <h2 className="text-2xl">My Progress</h2>
      <div className="grid grid-cols-12 my-10">
     {courses?.map((course) => (
  <CourseCardLearner key={course.id} course={course}  />))
        } 
    
      </div>
    </>
  )
}
