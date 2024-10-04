import { http } from "msw";
import { createNatureListQueryResponse } from "../../mocks/pokemonMocks/createNatureList";


export const natureListHandler = http.get("*/api/v2/nature/", function handler(info) {
    return new Response(JSON.stringify(createNatureListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});