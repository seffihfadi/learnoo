import SignupForm from "@/components/forms/signup-form";
import { getTranslations } from "next-intl/server";

export default async function Signup() {
  const t = await getTranslations('Auth')

  return (
    <>
      <h1 className="text-3xl font-semibold">{t('register')}</h1>
      <SignupForm />
    </>
  )
}
