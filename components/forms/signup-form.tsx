"use client"

import { useActionState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { signupAction } from "@/actions/userActions";


export default function SignupForm() {

  const [state, formAction, isPending] = useActionState(signupAction, null);

  return (
    <form action={formAction} className="grid grid-cols-2 max-w-md w-full gap-4 px-5 mt-10">
      {state && <div className={cn("col-span-2 text-lg text-center", state.success ? "text-green-500" : "text-red-500")}>{state.error}</div>}

      <div className="group col-span-2">
        <input id="name" name="name" type="text" required />
        <label htmlFor="name">full name</label>
        {state?.full_name && <span className='error'>{state.full_name}</span>}

        
      </div>
      <div className="group col-span-2">
        <input id="mail" name="mail" type="email" required />
        <label htmlFor="mail">email</label>
        {state?.email && <span className='error'>{state.email}</span>}
      </div>
      <div className="col-span-2 group">
        <input id="password" name="password" type="password" required />
        <label htmlFor="password">password</label>
        {state?.password && <span className='error'>{state.password}</span>}

      </div>
      <div className="flex col-span-2 items-center ">
        <Link className="hover:text-primary" href="/auth/signin">Login</Link>
        <button disabled={isPending} type="submit" className="primary ml-auto"> 
          {isPending ? "submitting..." : "submit"}
        </button>
      </div>
    </form>
  )
}
