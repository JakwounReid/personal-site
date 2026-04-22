import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const auth = req.cookies.get('dashboard-auth')?.value
  if (auth !== process.env.DASHBOARD_SECRET) {
    return NextResponse.redirect(new URL('/dashboard/login', req.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
