"use client"

import { enrollAction } from "@/actions/courseActions";
import { useActionState } from "react";

export default function EnrollForm({courseId}: {courseId: number}) {
  const [state, formAction, isPending] = useActionState(enrollAction, {courseId})

  return (
    <form action={formAction}>
      <button disabled={isPending} className="bg-secondary capitalize p-4 text-white rounded-md w-52 hover:opacity-80 transition-colors text-sm font-semibold">enroll now</button>
      {state.error && <><br /><span className="text-sm text-red-500 capitalize">{state.error}</span></>} 
    </form>
  )
}
