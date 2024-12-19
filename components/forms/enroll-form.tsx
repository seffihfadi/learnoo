"use client"

import { enrollAction } from "@/actions/courseActions";
import { useTranslations } from "next-intl";
import { useActionState } from "react";

export default function EnrollForm({courseId}: {courseId: number}) {
  const [state, formAction, isPending] = useActionState(enrollAction, {courseId})
  const t = useTranslations("CoursePresentationPage")

  return (
    <form action={formAction}>
      <button disabled={isPending} className="bg-secondary capitalize p-4 text-white rounded-md w-52 hover:opacity-80 transition-colors text-sm font-semibold">{t('enroll')}</button>
      {state.error && <><br /><span className="text-sm text-red-500 capitalize">{state.error}</span></>} 
    </form>
  )
}
