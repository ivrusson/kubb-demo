import { http } from "msw";
import { createPokemonColorListQueryResponse } from "../../mocks/pokemonMocks/createPokemonColorList";


export const pokemonColorListHandler = http.get("*/api/v2/pokemon-color/", function handler(info) {
    return new Response(JSON.stringify(createPokemonColorListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});