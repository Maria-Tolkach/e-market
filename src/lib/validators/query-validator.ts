import { z } from "zod";

export const QueryValidator = z.object({
  category: z.string().optional(),
  sort: z.enum(["asd", "desc"]).optional(),
  limit: z.number().optional()
})

export type TQueryValidator = z.infer<typeof QueryValidator>
