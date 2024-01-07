import Portfolio from "@/components/Portfolio";
// import { getUserInfo } from "@/server_utils/user";
import "./globals.css";
import { readJsonFile } from "@/server_utils/fs";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// export const revalidate = 3600;

export default async function Home() {
  const userInfo = readJsonFile();
  // const userInfo = await getUserInfo();
  if (!userInfo) return <h1>User not found</h1>;
  return <Portfolio {...userInfo} />;
}
