import { http } from "msw";
import { createPokemonColorRetrieveQueryResponse } from "../../mocks/pokemonMocks/createPokemonColorRetrieve";


export const pokemonColorRetrieveHandler = http.get("*/api/v2/pokemon-color/:id/", function handler(info) {
    return new Response(JSON.stringify(createPokemonColorRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});