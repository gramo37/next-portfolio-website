import { getUserInfo, updateUserInfo } from "@/server_utils/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const updatedUser = await updateUserInfo(body);
  return NextResponse.json({ updatedUser });
}

export async function GET() {
  const user = await getUserInfo();
  return NextResponse.json({ user });
}
