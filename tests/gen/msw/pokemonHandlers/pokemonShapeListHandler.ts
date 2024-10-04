import { http } from "msw";
import { createPokemonShapeListQueryResponse } from "../../mocks/pokemonMocks/createPokemonShapeList";


export const pokemonShapeListHandler = http.get("*/api/v2/pokemon-shape/", function handler(info) {
    return new Response(JSON.stringify(createPokemonShapeListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});