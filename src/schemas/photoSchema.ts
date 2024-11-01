import { z } from "zod";

export const photoSchema = z.object({
  id: z.number().optional(),
  pic_name: z.string().optional(),
  selected: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
