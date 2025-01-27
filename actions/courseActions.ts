"use server"
import axios from "axios";
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



import { cookies } from "next/headers";

export async function createCourseAction(formData: FormData) {

  const cookieStore = cookies();
  const idToken = cookieStore.get("id_token")?.value;

  if (!idToken) {
    throw new Error("Authorization token is missing.");
  }

  try {
    // Log the FormData for debugging
    console.log("FormData Entries:");
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Send the request to the API using Axios
    const response = await axios.post( `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses`, formData, {
      headers: {
        Authorization: `Bearer ${idToken}`,

      },
    });

    console.log("Response Status:", response.status);
    console.log("Response Data:", response.data);

    // Handle the response
    if (response.status === 201) {
      return { success: true };
    } else {
      return { error: "An unexpected error occurred." };
    }
  } catch (error) {
    console.error("Error creating course:", error.response);

    // Handle Axios errors
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;
      const status = error.response?.status;

      if (status === 400) {
        return { error: errorData?.error || "Invalid request data." };
      } else if (status === 401) {
        return { error: "Unauthorized. Please log in again." };
      } else if (status === 500) {
        return { error: "An internal server error occurred. Please try again later." };
      
      } else if (status === 520) {
        return { error: "An internal server error occurred. Please try again later.", };
      } else {
        return { error: errorData?.message || "An unexpected error occurred." };
      }
    }

    return { error: "Failed to create course. Please try again." };
  }
} 
export async function createChapterAction(formData: FormData,courseId:Number) {

  const cookieStore = await cookies();
  const idToken = cookieStore.get("id_token")?.value;

  if (!idToken) {
    throw new Error("Authorization token is missing.");
  }

  try {
    // Log the FormData for debugging
    console.log("FormData Entries:");
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/${courseId}/chapters`)
console.log(formData)
    // Send the request to the API using Axios
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/${courseId}/chapters`, JSON.stringify(Object.fromEntries(formData.entries())), {
      headers: { 'Content-Type': 'application/json' ,
        Authorization: `Bearer ${idToken}`,
      },
    });

    console.log("Response Status:", response.status);
    console.log("Response Data:", response.data);

    // Handle the response
    if (response.status === 201) {
      return { success: true };
    } else {
      return { error: "An unexpected error occurred." };
    }
  } catch (error) {
    console.error("Error creating chapter:", error.response);

    // Handle Axios errors
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;
      const status = error.response?.status;

      if (status === 400) {
        return { error: errorData?.error || "Invalid request data." };
      } else if (status === 401) {
        return { error: "Unauthorized. Please log in again." };
      } else if (status === 500) {
        return { error: "An internal server error occurred. Please try again later." };
      } else if (status === 520) {
        return { error: "An internal server error occurred. Please try again later." };
      } else {
        return { error: errorData?.message || "An unexpected error occurred." };
      }
    }

    return { error: "Failed to create chapter. Please try again." };
  }
}
export async function createLessonAction(formData: FormData,courseId:Number,chapterId:string) {

  const cookieStore = await cookies();
  const idToken = cookieStore.get("id_token")?.value;

  if (!idToken) {
    throw new Error("Authorization token is missing.");
  }

  try {
    // Log the FormData for debugging
    console.log("FormData Entries:");
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/${courseId}/chapters/${chapterId}/lessons`)
console.log(formData)
    // Send the request to the API using Axios
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/courses/${courseId}/chapters/${chapterId}/lessons`, formData, {
      headers: { 
        Authorization: `Bearer ${idToken}`,
      },
    });

    console.log("Response Status:", response.status);
    console.log("Response Data:", response.data);

    // Handle the response
    if (response.status === 201) {
      return { success: true };
    } else {
      return { error: "An unexpected error occurred." };
    }
  } catch (error) {
    console.error("Error creating chapter:", error.response|| error);

    // Handle Axios errors
    if (axios.isAxiosError(error)) {
      const errorData = error.response?.data;
      const status = error.response?.status;

      if (status === 400) {
        return { error: errorData?.error || "Invalid request data." };
      } else if (status === 401) {
        return { error: "Unauthorized. Please log in again." };
      } else if (status === 500) {
        return { error: "An internal server error occurred. Please try again later." };
      } else if (status === 520) {
        return { error: "An internal server error occurred. Please try again later." };
      } else {
        return { error: errorData?.message || "An unexpected error occurred." };
      }
    }

    return { error: "Failed to create chapter. Please try again." };
  }
}