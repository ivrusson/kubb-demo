import { http } from "msw";
import { createPokemonRetrieveQueryResponse } from "../../mocks/pokemonMocks/createPokemonRetrieve";


export const pokemonRetrieveHandler = http.get("*/api/v2/pokemon/:id/", function handler(info) {
    return new Response(JSON.stringify(createPokemonRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});