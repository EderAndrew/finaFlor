import { prisma } from "../utils/prisma";

export const changeStatus = async (id: number, selected: boolean) => {
  const photo = await prisma.pic.update({
    where: {
      id,
    },
    data: {
      selected,
    },
  });

  if (!photo) return null;

  return photo;
};
