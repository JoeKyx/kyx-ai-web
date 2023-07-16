import { NextRequest, NextResponse } from "next/server";
import { rateLimiter } from "./lib/rate-limiter";
import {
  NextRequestWithAuth,
  withAuth,
  WithAuthArgs,
} from "next-auth/middleware";

export default withAuth(async function middleware(req) {
  console.log("middleware");
  console.log(req.nextUrl.pathname);
  if (req.nextUrl.pathname.startsWith("/api/message")) {
    const ip = req.ip ?? "127.0.0.1";
    console.log(ip);
    try {
      const { success } = await rateLimiter.limit(ip);

      console.log(success);

      if (!success)
        return new NextResponse("You are writing messages too fast.");

      return NextResponse.next();
    } catch (error) {
      return new NextResponse(
        "Sorry, something went wrong processing your message. Please try again later."
      );
    }
  }
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    console.log(req.nextauth.token);
  }
});

export const config = {
  // matcher: ["/api/message/:path*", "/dashboard"],
  matcher: ["/dashboard"],
};
