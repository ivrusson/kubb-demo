import { http } from "msw";
import { createPokeathlonStatListQueryResponse } from "../../mocks/pokemonMocks/createPokeathlonStatList";


export const pokeathlonStatListHandler = http.get("*/api/v2/pokeathlon-stat/", function handler(info) {
    return new Response(JSON.stringify(createPokeathlonStatListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});