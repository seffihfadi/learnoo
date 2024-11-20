"use client"

import { useActionState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function SigninForm() {

  // const [state, action, isPending] = useActionState(signinAction, null);

  return (
    <form action='' className="grid grid-cols-2 max-w-md w-full gap-4 px-5 mt-10">
      {/* {state && <div className={cn("col-span-2 text-lg text-center", state.success ? "text-green-500" : "text-red-500")}>{state.message}</div>} */}

      <div className="col-span-2 group">
        <input id="fname" name="fname" type="text" required />
        <label htmlFor="fname">full name</label>
      </div>
      <div className="group col-span-2">
        <input id="mail" name="mail" type="email" required />
        <label htmlFor="mail">email</label>
        {/* <span className='error'>please enter a valid email</span> */}
      </div>
      <div className="col-span-2 group">
        <input id="password" name="password" type="password" required />
        <label htmlFor="password">password</label>
      </div>
      {/* <div className="col-span-2 group">
        <textarea name="body" id="body" rows={4} required></textarea>
        <label htmlFor="body">{formFields.message}</label>
      </div> */}
      <div className="flex col-span-2 items-center ">
        <Link className="hover:text-primary" href="/auth/signup">Register</Link>
        <button type="submit" className="primary ml-auto">submit</button>
      </div>
    </form>
  )
}
