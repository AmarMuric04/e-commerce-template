import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname starts with /profile
  const isProfilePage = pathname.startsWith("/profile");
  const isCheckoutPage = pathname.startsWith("/checkout");

  // Get the token
  const token = await getToken({ req: request });

  // If the user is not logged in and trying to access a protected route
  if (!token && (isProfilePage || isCheckoutPage)) {
    const url = new URL("/auth/login", request.url);
    url.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(url);
  }

  // If the user is logged in and trying to access auth pages
  if (token && pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile/:path*", "/checkout/:path*", "/auth/:path*"],
};
