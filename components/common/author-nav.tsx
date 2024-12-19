import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { getProfile } from "@/lib/func";
import UserImage from "../custom/user-image";

export default async function AuthorNav() {
  const profile = await getProfile()
  return (
    <nav className="fixed top-0 left-0 h-screen flex items-center z-20">
      <ul className="flex flex-col h-full gap-2 items-center [&>li]:px-1.5 px-1 py-5 shadow-xl bg-muted">
        <li>
          <Link title="home" href="/">
            <Image src="/logo-small.svg" width={30} height={30} alt='oo' />
          </Link>
        </li>
        <li className='bg-primary rounded-lg my-6'>
          <Link title="create course" href="/inst/courses/create">
            <i className="uil uil-plus-circle text-white"></i>
          </Link>
        </li>
        <li>
          <Link title="dashboard" href="/inst/">
            <i className="uil uil-chart-line"></i>
          </Link>
        </li>
        <li>
          <Link title="courses" href="/inst/courses">
            <i className="uil uil-book-open"></i>
          </Link>
        </li>
        <li>
          <Link title="notifications" href="/inst/notifications">
            <i className="uil uil-bell"></i>
          </Link>
        </li>
        
        <li className='mt-auto'> 
          <ThemeToggle />
        </li>
        <li>
          <Link title="profile" href="/inst/profile">
            <div className="rounded-full w-8 h-8 overflow-hidden">
              <UserImage avatar={profile.image} fullName={profile.full_name} />
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
