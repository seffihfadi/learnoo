import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getDataAction } from './actions/getActions'
import { User } from './types/user'
// import { type Locale, locales } from "@/lib/locales";

// import createMiddleware from "next-intl/middleware";

// export createMiddleware({
//   locales,
//   defaultLocale: "en" satisfies Locale,
//   localePrefix: "never",
// });

export async function middleware(request: NextRequest) {
  // return nextIntlMiddleware(request)
  // const intlResponse = nextIntlMiddleware(request)
  // if (intlResponse) return intlResponse

  try {
    const profile = await getDataAction<User>("/users/profiles/profile", "append_with=image,author_profile")
    // console.log('profile ------- middleware', profile)
    if (!profile) return NextResponse.redirect(new URL('/auth/signin', request.url))
    
    const isInstructorRoute = request.nextUrl.pathname.startsWith('/inst');
    // console.log('cant access', isInstructorRoute && !profile.author_profile)
    if (isInstructorRoute && !profile.author_profile) {
      return NextResponse.redirect(new URL('/account', request.url))
    }
      
    const response = NextResponse.next()
    response.cookies.set('profile', JSON.stringify(profile), {
      path: '/', 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
    })

    return response

  } catch (error) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }
  
}


export const config = {
  matcher: [
    '/inst/:path', 
    '/inst', 
    '/account', 
    '/account/:path',
    // "/((?!api|_next|_vercel|.*\\..*).*)"
  ]
};
