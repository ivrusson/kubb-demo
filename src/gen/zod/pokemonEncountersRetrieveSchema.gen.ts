import { z } from "@/utils/zod.ts";


export const pokemonEncountersRetrievePathParamsSchema = z.object({ "pokemon_id": z.string().regex(new RegExp("^\\d+$")) });
export type PokemonEncountersRetrievePathParamsSchema = z.infer<typeof pokemonEncountersRetrievePathParamsSchema>;

 export const pokemonEncountersRetrieve200Schema = z.array(z.object({ "location_area": z.object({ "name": z.string(), "url": z.string().url() }), "version_details": z.array(z.object({ "encounter_details": z.array(z.object({ "chance": z.number(), "condition_values": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "max_level": z.number(), "method": z.object({ "name": z.string(), "url": z.string().url() }), "min_level": z.number() })), "max_chance": z.number(), "version": z.object({ "name": z.string(), "url": z.string().url() }) })) }));
export type PokemonEncountersRetrieve200Schema = z.infer<typeof pokemonEncountersRetrieve200Schema>;

 export const pokemonEncountersRetrieveQueryResponseSchema = z.array(z.object({ "location_area": z.object({ "name": z.string(), "url": z.string().url() }), "version_details": z.array(z.object({ "encounter_details": z.array(z.object({ "chance": z.number(), "condition_values": z.array(z.object({ "name": z.string(), "url": z.string().url() })), "max_level": z.number(), "method": z.object({ "name": z.string(), "url": z.string().url() }), "min_level": z.number() })), "max_chance": z.number(), "version": z.object({ "name": z.string(), "url": z.string().url() }) })) }));
export type PokemonEncountersRetrieveQueryResponseSchema = z.infer<typeof pokemonEncountersRetrieveQueryResponseSchema>;