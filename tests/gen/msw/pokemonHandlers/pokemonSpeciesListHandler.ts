import { http } from "msw";
import { createPokemonSpeciesListQueryResponse } from "../../mocks/pokemonMocks/createPokemonSpeciesList";


export const pokemonSpeciesListHandler = http.get("*/api/v2/pokemon-species/", function handler(info) {
    return new Response(JSON.stringify(createPokemonSpeciesListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});