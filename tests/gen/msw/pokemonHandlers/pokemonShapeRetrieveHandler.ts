import { http } from "msw";
import { createPokemonShapeRetrieveQueryResponse } from "../../mocks/pokemonMocks/createPokemonShapeRetrieve";


export const pokemonShapeRetrieveHandler = http.get("*/api/v2/pokemon-shape/:id/", function handler(info) {
    return new Response(JSON.stringify(createPokemonShapeRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});