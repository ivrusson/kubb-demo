import { http } from "msw";
import { createPokemonSpeciesRetrieveQueryResponse } from "../../mocks/pokemonMocks/createPokemonSpeciesRetrieve";


export const pokemonSpeciesRetrieveHandler = http.get("*/api/v2/pokemon-species/:id/", function handler(info) {
    return new Response(JSON.stringify(createPokemonSpeciesRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});