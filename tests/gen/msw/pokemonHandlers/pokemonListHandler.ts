import { http } from "msw";
import { createPokemonListQueryResponse } from "../../mocks/pokemonMocks/createPokemonList";


export const pokemonListHandler = http.get("*/api/v2/pokemon/", function handler(info) {
    return new Response(JSON.stringify(createPokemonListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});