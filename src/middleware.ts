import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (url.pathname === "/en" || url.pathname.startsWith("/en/")) {
    return NextResponse.redirect(new URL(url.pathname.replace(/^\/en/, "/"), req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/en/:path*"],
};
