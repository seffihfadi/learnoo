"use server"

import { redirect } from "next/navigation";
import {fetchData} from "@/lib/func";

export async function enrollAction({courseId} : {courseId: string}) {
  const response = await fetchData({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user-courses/start-course/${courseId}`,
    method: 'POST',
    body: {
      payment_success_url: process.env.NEXT_PUBLIC_PAYMENT_SUCCESS_URL,
      payment_fail_url: process.env.NEXT_PUBLIC_PAYMENT_FAIL_URL,
    }
  });

  
  if (response.status === 401) {
    redirect(`/auth/signin`)
  }

  if (response.status === 400) {
    redirect(`/courses/${courseId}/lecture/1`)
  }

  const data = await response.json();
  return data || {};
}


export async function createCourseAction(formData: FormData) {
  // console.log('form', form)
  const response = await fetchData({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses`,
    method: 'POST',
    body: formData,
    isFormData: true,
  });
  console.log('formData', formData)

  console.log('res------------->', response)
  const data = await response.json();
  console.log('data', data)

  return data || {};

}

