import Image from "next/image"
import Link from "next/link"
import { LanguageSwitcher } from "./language-swither"
import ThemeToggle from "./theme-toggle"
export default function Header() {
  return (
    <header className="w-full bg-background fixed top-0 left-0 shadow-lg py-1 z-20">
      <div className="container flex justify-between items-center">

        <div className="logo">
          <Image src="/logo2.svg" alt="" width={140} height={57} />
        </div>
        
        <div className="relative mr-auto mx-10">
          <input className="rounded-full w-96" type="text" placeholder="What do you want to learn?" />
          <div className="absolute rounded-full aspect-square h-[calc(100%-8px)] bg-blue-100 flex items-center justify-center right-1 top-1">
            <i className="uil uil-search text-primary text-[18px]"></i>
          </div>
        </div>
        <LanguageSwitcher />
        <ThemeToggle />
        {/* <Link href="/account/profile">
          <div className="rounded-full w-10 h-10 overflow-hidden">
            <Image className="w-full h-full object-cover" src="/imgs/learn (1).jpg" alt="" width={100} height={100} />
          </div>
        </Link> */}
        <div className="flex items-center gap-2">
          <Link href="/auth/signin" className="secondary">login</Link>
          <Link href="/auth/signup" className="primary">sign in</Link>
        </div>
      </div>
    </header>
  )
}
