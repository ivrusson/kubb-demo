import { http } from "msw";
import { createMoveDamageClassListQueryResponse } from "../../mocks/pokemonMocks/createMoveDamageClassList";


export const moveDamageClassListHandler = http.get("*/api/v2/move-damage-class/", function handler(info) {
    return new Response(JSON.stringify(createMoveDamageClassListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});