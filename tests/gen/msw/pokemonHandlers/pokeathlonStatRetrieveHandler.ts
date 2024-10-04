import { http } from "msw";
import { createPokeathlonStatRetrieveQueryResponse } from "../../mocks/pokemonMocks/createPokeathlonStatRetrieve";


export const pokeathlonStatRetrieveHandler = http.get("*/api/v2/pokeathlon-stat/:id/", function handler(info) {
    return new Response(JSON.stringify(createPokeathlonStatRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});