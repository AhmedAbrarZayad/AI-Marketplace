import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

/**
 * Proxy function for Next.js 16+
 * Handles authentication protection for routes
 */
export async function proxy(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = request.nextUrl;

  // Protect /create-prompts route
  if (!token && pathname.startsWith("/create-prompts")) {
    const url = new URL("/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/create-prompts"],
};
