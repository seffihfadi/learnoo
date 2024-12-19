import { getDataAction } from "@/actions/getActions";
import NotFound from "@/app/not-found";
import LazyImage from "@/components/custom/lazy-image";
import { User } from "@/types/user";
// import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

export default async function AccountLayout({ children }: { children: React.ReactNode }) {

  const profile = await getDataAction<User>("/users/profiles/profile", "append_with=image,author_profile")
  console.log('data', profile)
  if (!profile) return <NotFound />
  
  return (
    <>
      <section>
        <div className="bg-muted w-full">
          <div className="container pt-10">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl">Account</h1>
              <button className="lite transition-colors hover:text-muted hover:bg-primary !pl-5 w-fit flex items-center">
                Logout
                <i className="uil uil-sign-out-alt text-[18px] ml-2"></i>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full w-40 aspect-square overflow-hidden">
                {/* <LazyImage className="w-full h-full object-cover" src={} alt="" width={500} height={500} /> */}
                <Image className="w-full h-full object-cover" src="/imgs/learn (6).jpg" alt="" width={500} height={500} />
              </div>
              <div className="flex flex-col mx-5">
                <h2 className="text-3xl capitalize">{profile.full_name}</h2>
                <p className="text-lg text-muted-foreground">3 active courses</p>
              </div>
            </div>
            <ul className="flex gap-5 items-center profile_links">
              <li>
                <Link href="/account/">profile</Link>
              </li>
              <li>
                <Link href="/account/learning">learning</Link>
              </li>
              <li>
                <Link href="/account/wishlist">wishlist</Link>
              </li>
              <li>
                <Link href="/account/notifications">notifications <span className="text-secondary">(4)</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container py-10">
        {children}
      </section>
    </>
  )
}
