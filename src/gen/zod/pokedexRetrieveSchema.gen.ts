import { z } from "@/utils/zod.ts";
import { pokedexDetailSchema } from "./pokedexDetailSchema.gen";


export const pokedexRetrievePathParamsSchema = z.object({ "id": z.string().describe("This parameter can be a string or an integer.") });
export type PokedexRetrievePathParamsSchema = z.infer<typeof pokedexRetrievePathParamsSchema>;

 export const pokedexRetrieve200Schema = z.lazy(() => pokedexDetailSchema);
export type PokedexRetrieve200Schema = z.infer<typeof pokedexRetrieve200Schema>;

 export const pokedexRetrieveQueryResponseSchema = z.lazy(() => pokedexDetailSchema);
export type PokedexRetrieveQueryResponseSchema = z.infer<typeof pokedexRetrieveQueryResponseSchema>;