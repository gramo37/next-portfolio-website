import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const secret_key: string | undefined = process.env.SECRET_KEY!;

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  try {
    const cookiesList = cookies();
    const token = cookiesList.get("auth")?.value;
    if (!token) return NextResponse.redirect(new URL("/me/login", request.url));
    const user = await jwtVerify(token, new TextEncoder().encode(secret_key));
    const { email, password } = user?.payload || {};
    if (
      email !== process.env.LOGIN_MAIL ||
      password !== process.env.LOGIN_PASSWORD
    )
      return NextResponse.redirect(new URL("/me/login", request.url));
    return;
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/me/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/me/userinfo/:path*", "/me/update/user/:path*"],
};
