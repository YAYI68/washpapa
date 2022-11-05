import { NextResponse } from 'next/server';
import { auth } from './config/firebaseConfig';



export function middleware(request) {
    let url = request.url
    let pathname = request.nextUrl.pathname
    console.log({pathname})
    if(auth.currentUser  && pathname === "/account/login" || pathname === "/account/register"){
        return  NextResponse.rewrite("/")
    }
    // if(auth.currentUser && )
    // const loginUrl = new URL('/account/login',request.url)
    // loginUrl.searchParams.set('from',request.nextUrl.pathname)
    // return NextResponse.redirect(loginUrl)   
  }

  // export const config = {
  //   matcher: ['/wash/:path*', '/account/reset_password',],
  // }