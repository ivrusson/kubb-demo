import { http } from "msw";
import { createPokemonHabitatRetrieveQueryResponse } from "../../mocks/pokemonMocks/createPokemonHabitatRetrieve";


export const pokemonHabitatRetrieveHandler = http.get("*/api/v2/pokemon-habitat/:id/", function handler(info) {
    return new Response(JSON.stringify(createPokemonHabitatRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});