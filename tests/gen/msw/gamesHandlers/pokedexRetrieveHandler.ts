import { http } from "msw";
import { createPokedexRetrieveQueryResponse } from "../../mocks/gamesMocks/createPokedexRetrieve";


export const pokedexRetrieveHandler = http.get("*/api/v2/pokedex/:id/", function handler(info) {
    return new Response(JSON.stringify(createPokedexRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});