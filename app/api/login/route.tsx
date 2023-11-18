import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";

const secret_key = process.env.SECRET_KEY;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password)
      return NextResponse.json({ error: "Please Enter Email and Password!" });
    if (
      email !== process.env.LOGIN_MAIL ||
      password !== process.env.LOGIN_PASSWORD
    )
      return NextResponse.json({ error: "Wrong Email or Password!" });
    // let token = await SignJWT(body, process.env.SECRET_KEY);
    const token = await new SignJWT(body)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(new TextEncoder().encode(secret_key));
    return NextResponse.json({ token });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server error" });
  }
}
