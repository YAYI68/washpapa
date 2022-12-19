
import { NextResponse } from "next/server";






export function middleware(request){
    const login = request.nextUrl.pathname.endsWith("/login")
    const register = request.nextUrl.pathname.endsWith("/register")
    const forgetPassword = request.nextUrl.pathname.endsWith("/forget_password")
    const wash = request.nextUrl.pathname.startsWith("/wash")

   const authToken =  request.cookies.get('authToken')
    
    if(!!authToken && (login || register || forgetPassword)) {
        return NextResponse.redirect(new URL('/', request.url))
      }

     if( !authToken && wash ){
     const loginUrl = new URL('/account/login', request.url)
     loginUrl.searchParams.set('from', request.nextUrl.pathname)
     return NextResponse.redirect(loginUrl)
     }

}

// export const config = {
//     matcher: ['/wash/:path*','/account/:path*',]
//   }