import { eggGroupNameSchema } from "./eggGroupNameSchema.gen";
import { z } from "@/utils/zod.ts";


export const eggGroupDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "names": z.array(z.lazy(() => eggGroupNameSchema)), "pokemon_species": z.array(z.object({ "name": z.string().describe("Pokemon species name.").optional(), "url": z.string().url().describe("The URL to get more information about the species").optional() })) });
export type EggGroupDetailSchema = z.infer<typeof eggGroupDetailSchema>;