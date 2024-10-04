import { http } from "msw";
import { createPokemonEncountersRetrieveQueryResponse } from "../../mocks/encountersMocks/createPokemonEncountersRetrieve";


export const pokemonEncountersRetrieveHandler = http.get("*/api/v2/pokemon/:pokemon_id/encounters", function handler(info) {
    return new Response(JSON.stringify(createPokemonEncountersRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});