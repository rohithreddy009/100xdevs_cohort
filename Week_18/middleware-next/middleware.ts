// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// let requestCount = 0;
// export function middleware(request: NextRequest) {
//   requestCount++;
//   console.log("number of requests is " + requestCount);
//   return  NextResponse.next()
// }

// export const config = {
//   matcher: '/api/:path*',
// }

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}
