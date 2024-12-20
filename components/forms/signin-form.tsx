"use client"

import { use, useActionState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { signinAction } from "@/actions/userActions";
import { useTranslations } from "next-intl";

export default function SigninForm() {
  const t = useTranslations('Auth')
  const [state, formAction, isPending] = useActionState(signinAction, null);

  return (
    <form action={formAction} className="grid grid-cols-2 max-w-md w-full gap-4 px-5 mt-10">
      {state && <div className={cn("col-span-2 text-center", state.success ? "text-green-500" : "text-red-500")}>{state?.error}</div>}

      <div className="group col-span-2">
        <input id="mail" name="email" type="email" required />
        <label htmlFor="mail">{t('email')}</label>
        {state?.email && <span className='error'>{state.email}</span>}

      </div>
      <div className="col-span-2 group">
        <input id="password" name="password" type="password" required />
        <label htmlFor="password">{t('password')}</label>
        {state?.password && <span className='error'>{state.password}</span>}
      </div>
      <div className="flex col-span-2 items-center ">
        <Link className="hover:text-primary" href="/auth/signup">{t('register')}</Link>
        <button disabled={isPending} type="submit" className="primary rtl:mr-auto ltr:ml-auto"> 
          {isPending ? t('submiting') : t('submit')}
        </button>
      </div>
    </form>
  )
}
