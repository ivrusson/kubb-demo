import { z } from "@/utils/zod.ts";


export const experienceSchema = z.object({ "level": z.number().int(), "experience": z.number().int() });
export type ExperienceSchema = z.infer<typeof experienceSchema>;