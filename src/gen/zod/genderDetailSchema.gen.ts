import { z } from "@/utils/zod.ts";


export const genderDetailSchema = z.object({ "id": z.number().int(), "name": z.string().max(100), "pokemon_species_details": z.array(z.object({ "rate": z.number().int(), "pokemon_species": z.object({ "name": z.string(), "url": z.string().url() }) })), "required_for_evolution": z.array(z.object({ "name": z.string(), "url": z.string().url() })) });
export type GenderDetailSchema = z.infer<typeof genderDetailSchema>;