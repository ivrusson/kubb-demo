import { http } from "msw";
import { createMoveDamageClassRetrieveQueryResponse } from "../../mocks/pokemonMocks/createMoveDamageClassRetrieve";


export const moveDamageClassRetrieveHandler = http.get("*/api/v2/move-damage-class/:id/", function handler(info) {
    return new Response(JSON.stringify(createMoveDamageClassRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});