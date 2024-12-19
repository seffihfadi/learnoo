"use client"

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function VerifyEmail() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [isDisabled, setIsDisabled] = useState(true);
  const [counter, setCounter] = useState(5);

  const handleResend = async () => {
    setIsDisabled(true);
    setCounter(5);
    console.log('process.env.BACKEND_URL', JSON.stringify({ email }))
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/auth/send-email-verification-link`, {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.status === 200) {
      console.log('Email sent successfully');
    } else {
      console.error('Failed to send email');
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter <= 1) {
          clearInterval(timer);
          setIsDisabled(false);
          return 0;
        }
        return prevCounter - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isDisabled]);

  return (
    <section className='flex justify-center items-center flex-col h-screen'>
      <h1 className='text-2xl font-semibold'>Verify your Email</h1>
      <p className="max-w-3xl my-5 text-muted-foreground text-xl text-center">
        We have sent you an email to <span className="text-primary">{email}</span> with a link to verify your email address. Please check your inbox and click on the link to verify your email then login.
      </p>
      <Link href="/auth/signin" className="primary !lowercase">
        Login to Learnoo
      </Link>
      <div className="flex justify-between w-full items-center max-w-3xl mt-20">
        <p>Didn't receive anything?</p>
        <button onClick={handleResend} disabled={isDisabled} className={`text-primary ${isDisabled ? 'pointer-events-none opacity-50' : ''}`}>
          {isDisabled ? `Resend Email (${counter}s)` : 'Resend Email'}
        </button>
      </div>
    </section>
  );
}
