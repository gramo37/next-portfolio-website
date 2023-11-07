import { getUserInfo } from "@/server_utils/user";

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Home() {
  const userInfo = await getUserInfo();
  if (!userInfo) return <h1>User not found</h1>;
  const { email, name, description } = userInfo;
  return (
    <div className="border border-red-600 m-2 p-2">
      <h1>{name}</h1>
      <p>{email}</p>
      <p>{description}</p>
    </div>
  );
}
