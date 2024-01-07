import { readJsonFile, writeJsonFile } from "@/server_utils/fs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const formType = searchParams.get("form");
  // Get the current json
  const userInfo = readJsonFile();
  // Overwrite it with body and keep the other things constant
  const body = await request.json();
  let updatedData = { ...userInfo, ...body };
  switch (formType) {
    case "user":
      updatedData = { ...userInfo, ...body };
      break;
    case "education":
      updatedData = {
        ...userInfo,
        education: [...body],
      };
      break;
    case "project":
      updatedData = {
        ...userInfo,
        project: [...body],
      };
      break;
    case "skills":
      updatedData = {
        ...userInfo,
        skills: [...body],
      };
      break;
    case "workExperience":
      updatedData = {
        ...userInfo,
        workExperience: [...body],
      };
      break;
    case "all":
      updatedData = {
        ...userInfo,
        ...body,
      };
      break;
    default:
      updatedData = {};
  }
  // Write in the file
  writeJsonFile(updatedData);
  return NextResponse.json({ updatedData });
}

export function GET() {
  // Read the json file and return the json
  const user = readJsonFile();
  return NextResponse.json({ user });
}
