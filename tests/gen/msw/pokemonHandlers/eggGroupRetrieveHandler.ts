import { http } from "msw";
import { createEggGroupRetrieveQueryResponse } from "../../mocks/pokemonMocks/createEggGroupRetrieve";


export const eggGroupRetrieveHandler = http.get("*/api/v2/egg-group/:id/", function handler(info) {
    return new Response(JSON.stringify(createEggGroupRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});