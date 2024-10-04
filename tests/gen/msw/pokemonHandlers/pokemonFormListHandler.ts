import { http } from "msw";
import { createPokemonFormListQueryResponse } from "../../mocks/pokemonMocks/createPokemonFormList";


export const pokemonFormListHandler = http.get("*/api/v2/pokemon-form/", function handler(info) {
    return new Response(JSON.stringify(createPokemonFormListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});