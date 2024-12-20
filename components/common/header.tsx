import Image from "next/image"
import Link from "next/link"
import { LanguageSwitcher } from "./language-swither"
import ThemeToggle from "./theme-toggle"
import SearchBar from "../custom/search-bar"
import UserImage from "../custom/user-image"
import { getProfile } from "@/lib/func"
import { getTranslations } from "next-intl/server"


export default async function Header() {
  const t = await getTranslations('Auth')
  const profile = await getProfile()

  // console.log('profile', profile)
  
  return (
    <header className="w-full bg-background fixed top-0 left-0 shadow-lg py-1 z-20">
      <div className="container flex justify-between items-center">

        <div className="logo">
          <Image src="/logo2.svg" alt="" width={140} height={57} />
        </div>
        
        <SearchBar />
        <LanguageSwitcher />
        <ThemeToggle />
        {profile 
        ?
          <Link className="mx-3" href="/account/learning">
            <div className="rounded-full w-10 h-10 overflow-hidden">
              <UserImage avatar={profile.image} fullName={profile.full_name} />
            </div>
          </Link>
        : 
        
          <div className="flex items-center gap-2">
            <Link href="/auth/signin" className="secondary">{t('login')}</Link>
            <Link href="/auth/signup" className="primary">{t('register')}</Link>
          </div>
        }
      </div>
    </header>
  )
}
