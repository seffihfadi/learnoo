import NotFound from "@/app/not-found";
import UserImage from "@/components/custom/user-image";
import LogoutForm from "@/components/forms/logout-form";
import { getProfile } from "@/lib/func";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AccountLayout({ children }: { children: React.ReactNode }) {

  const profile = await getProfile()
  console.log('profile----------------------', profile)
  // if (!!profile.author_profile) {
  //   redirect(`/inst/`)
  // }
  if (!profile) return <NotFound />
  
  return (
    <>
      <section>
        <div className="bg-muted w-full">
          <div className="container pt-10">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl">Account</h1>
              <LogoutForm />
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full w-40 aspect-square overflow-hidden">
                <UserImage avatar={profile?.image} fullName={profile.full_name} />
              </div>
              <div className="flex flex-col mx-5">
                <h2 className="text-3xl capitalize">{profile.full_name}</h2>
                <p className="text-lg text-muted-foreground">3 active courses</p>
              </div>
            </div>
            <ul className="flex gap-5 items-center profile_links">
              {/* <li>
                <Link href="/account/">profile</Link>
              </li> */}
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
