import { z } from "zod";

export const User = z.object({
  last_name: z.string().min(1).max(255),
  first_name: z.string().min(1).max(255),
});
