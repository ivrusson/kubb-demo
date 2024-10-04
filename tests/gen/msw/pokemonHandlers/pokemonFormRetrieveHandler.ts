import { http } from "msw";
import { createPokemonFormRetrieveQueryResponse } from "../../mocks/pokemonMocks/createPokemonFormRetrieve";


export const pokemonFormRetrieveHandler = http.get("*/api/v2/pokemon-form/:id/", function handler(info) {
    return new Response(JSON.stringify(createPokemonFormRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});