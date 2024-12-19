import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

// export const metadata: Metadata = {
//   title: "learnoo",
//   description: "Learning DZ platform",
// }

export default function AuthLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <main className="grid grid-cols-12 md:gap-5 -mt-20 pt-20">
      <div className="col-span-12 md:col-span-6 max-h-full items-center justify-center md:h-screen md:sticky md:top-20">
        <div className="w-[calc(100%-1rem)] h-[calc(100%-1rem)] ml-2 mt-2 rounded-2xl overflow-hidden relative">
          <Image className="w-full h-full object-cover" src="/imgs/learn (11).jpg" width={1000} height={1000} alt="" />
          <div className="absolute px-5 pb-10 pt-2 flex flex-col w-full h-full left-0 top-0 bg-gradient-to-t from-[#111111] to-transparent text-primary-foreground">
            <Link href="/">
              <Image src="/logo2.svg" alt="" width={140} height={57} />
            </Link>
            <h1 className="mt-auto text-white text-2xl leading-9 font-semibold">
              Sign up to unlock a world of knowledge. Access learning resources, track your progress, and join a community of learners.
            </h1>
          </div>
        </div>
      </div>
      <div className="md:col-span-6 col-span-12 flex items-center justify-center flex-col py-5">
        {children}
        <div className="text-center w-full my-8 before:-z-10 max-w-md before:content-[''] before:w-[calc(100%-40px)] relative before:h-px before:bg-border before:absolute before:top-2.5 before:left-5">
          <span className="bg-background px-3 font-semibold">OR</span>
        </div>
        <div className="grid grid-cols-2 gap-5 w-full px-5 max-w-md">
          <div className="col-span-1">
            <Link className="social_btn" href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/auth/oauth/google/login?success_url=${process.env.NEXT_PUBLIC_LOGIN_SUCCESS_URL}&failure_url=${process.env.NEXT_PUBLIC_LOGIN_FAILURE_URL}`}>
              <Image src="/social/google.svg" alt="google" width={25} height={25} />
              Google
            </Link>
          </div>
          <div className="col-span-1">
            <Link className="social_btn" href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/auth/oauth/facebook/login?success_url=${process.env.NEXT_PUBLIC_LOGIN_SUCCESS_URL}&failure_url=${process.env.NEXT_PUBLIC_LOGIN_FAILURE_URL}`}>
              <Image src="/social/facebook.svg" alt="facebook" width={25} height={25} />
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </main>

  )
}
