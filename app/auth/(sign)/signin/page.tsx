import SigninForm from "@/components/forms/signin-form";
import { getTranslations } from "next-intl/server";

export default async function Signin() {
  const t = await getTranslations('Auth')
  return (
    <>
      <h1 className="text-3xl font-semibold capitalize">{t('login')}</h1>
      <SigninForm />
    </>
  )
}
