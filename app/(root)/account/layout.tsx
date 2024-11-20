import Image from "next/image";
import Link from "next/link";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
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
                <Image className="w-full h-full object-cover" src="/imgs/learn (6).jpg" alt="" width={500} height={500} />
              </div>
              <div className="flex flex-col mx-5">
                <h2 className="text-3xl">Seffih Fadi</h2>
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
                <Link href="/account/notifications">notifications</Link>
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
