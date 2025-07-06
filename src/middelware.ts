import { NextResponse, NextRequest } from 'next/server'
import getOrCreateDB from './models/server/dbSetup'
import getOrCreateStorage from './models/server/storageSetup'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    await Promise.all([
    getOrCreateDB(),
    getOrCreateStorage()
    ])
  return NextResponse.next()
}
 
export const config = {
    // match all request path except for the ones that start with :
    //-api
    //next/static
    // _next/image
    // -favicon
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}