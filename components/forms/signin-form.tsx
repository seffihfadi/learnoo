"use client"

import { useActionState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { signinAction } from "@/actions/userActions";

export default function SigninForm() {

  const [state, formAction, isPending] = useActionState(signinAction, null);

  return (
    <form action={formAction} className="grid grid-cols-2 max-w-md w-full gap-4 px-5 mt-10">
      {state && <div className={cn("col-span-2 text-center", state.success ? "text-green-500" : "text-red-500")}>{state?.error}</div>}

      <div className="group col-span-2">
        <input id="mail" name="email" type="email" required />
        <label htmlFor="mail">email</label>
        {state?.email && <span className='error'>{state.email}</span>}

      </div>
      <div className="col-span-2 group">
        <input id="password" name="password" type="password" required />
        <label htmlFor="password">password</label>
        {state?.password && <span className='error'>{state.password}</span>}
      </div>
      <div className="flex col-span-2 items-center ">
        <Link className="hover:text-primary" href="/auth/signup">Register</Link>
        <button disabled={isPending} type="submit" className="primary ml-auto"> 
          {isPending ? "submitting..." : "submit"}
        </button>
      </div>
    </form>
  )
}
