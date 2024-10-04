import { http } from "msw";
import { createEggGroupListQueryResponse } from "../../mocks/pokemonMocks/createEggGroupList";


export const eggGroupListHandler = http.get("*/api/v2/egg-group/", function handler(info) {
    return new Response(JSON.stringify(createEggGroupListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});