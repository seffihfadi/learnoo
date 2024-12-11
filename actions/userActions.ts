"use server"

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function signinAction(prev: any, formData: FormData) {

  const credentials = {
    email: formData.get('email'),
    password: formData.get('password')
  }

  const res = await fetch(`${process.env.BACKEND_URL}/users/auth/login-with-email-and-password`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status === 200) {
    redirect('/account/profile');
  }

  console.log("Response Headers:", res.headers);

  const setCookieHeader = res.headers.get("set-cookie");

  if (setCookieHeader) {

    const cookiesArray = setCookieHeader.split(", ").map((cookie) => cookie.split(";")[0]);

    const cookiesStore = await cookies();

    cookiesArray.forEach((cookiePair) => {
      const [key, value] = cookiePair.split('=');

      const cookieOptions: any = {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      };

      // Assign different expiration times for tokens
      if (key === 'accessToken') {
        cookieOptions.maxAge = 60 * 15; // 15 minutes
      } else if (key === 'refreshToken') {
        cookieOptions.maxAge = 60 * 60 * 24 * 30; // 30 days
      }

      cookiesStore.set(key, value, cookieOptions);
    });
  }

  try {
    const data = await res.json();
    console.log("Response Body:", data);
    return data;
  } catch (error) {
    throw new Error('Failed to parse the response.');
    
  }
}

export async function signupAction(prev: any, formData: FormData) {

  const credentials = {
    email: formData.get('mail'),
    password: formData.get('password'),
    full_name: formData.get('name')
  }

  const res = await fetch(`${process.env.BACKEND_URL}/users/auth/register-with-email-and-password`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log("Response Headers:", res.headers);
  console.log('res.status', res.status)

  if (res.status === 201) {
    redirect('/auth/verify-email?email=' + credentials.email);
  }
  try {
    const data = await res.json();
    console.log("Response Body:", data);
    return data;
  } catch (error) {
    throw new Error('Failed to parse the response.'); 
  }
}