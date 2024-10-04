import { http } from "msw";
import { createPokedexListQueryResponse } from "../../mocks/gamesMocks/createPokedexList";


export const pokedexListHandler = http.get("*/api/v2/pokedex/", function handler(info) {
    return new Response(JSON.stringify(createPokedexListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});