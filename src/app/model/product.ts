import { z } from "zod";

export const categorySchema = z.object({
  categoryName: z.string().min(1),
});

export type TCategorySchema = z.infer<typeof categorySchema>;
// export type TLoginUserSchema = z.infer<typeof loginUserSchema>;
