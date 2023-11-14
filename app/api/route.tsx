import { getUserInfo, updateAllUserInfo, updateEducationInfo, updateProjectInfo, updateSkillInfo, updateUserInfo, updateWorkExperienceInfo } from "@/server_utils/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const formType = searchParams.get("form");
  const body = await request.json();
  let updatedData: any;
  switch(formType) {
    case "user":
      updatedData = await updateUserInfo(body);
      break;
    case "education": 
      updatedData = await updateEducationInfo(body);
      break;
    case "project":
      updatedData = await updateProjectInfo(body);
      break;
    case "skills":
      updatedData = await updateSkillInfo(body);
      break;
    case "workExperience":
      updatedData = await updateWorkExperienceInfo(body);
      break;
    case "all":
      updatedData = await updateAllUserInfo(body)
      break;
    default:
      updatedData = {}
  }
  return NextResponse.json({ updatedData });
}

export async function GET() {
  const user = await getUserInfo();
  return NextResponse.json({ user });
}
