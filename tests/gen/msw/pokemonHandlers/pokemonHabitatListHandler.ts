import { http } from "msw";
import { createPokemonHabitatListQueryResponse } from "../../mocks/pokemonMocks/createPokemonHabitatList";


export const pokemonHabitatListHandler = http.get("*/api/v2/pokemon-habitat/", function handler(info) {
    return new Response(JSON.stringify(createPokemonHabitatListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});