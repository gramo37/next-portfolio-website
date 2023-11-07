import { prisma } from "@/db";
import { TUser } from "@/types/user";

export async function getUserInfo(): Promise<TUser> {
  const user = await prisma.user.findUnique({
    where: { id: 1 },
  });
  if (!user) throw new Error("User not found!");
  return user;
}

export async function updateUserInfo(user: TUser) {
  const updatedUser = await prisma.user.update({
    where: { id: 1 },
    data: user,
  });
  if (!updatedUser) throw new Error("User not updated! Try again..");
  return updatedUser;
}
