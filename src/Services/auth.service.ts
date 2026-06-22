import  prisma  from "../lib/prisma.ts";

/* CREATE */
export const createUser = async (data: {
  name: string;
  email: string;
  password:string,
  role?: string;
}) => {
  return await prisma.user.create({
    data: {
      ...data,
      role: data.role ?? "user",
    },
  });
};

/* READ ALL */
export const getUsers = async () => {
  return await prisma.user.findMany();
};

/* READ ONE */
export const getUserById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

/* UPDATE */
export const updateUser = async (id: string, data: any) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};

/* DELETE */
export const deleteUser = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};