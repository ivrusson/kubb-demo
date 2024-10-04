import { http } from "msw";
import { createAbilityRetrieveQueryResponse } from "../../mocks/pokemonMocks/createAbilityRetrieve";


export const abilityRetrieveHandler = http.get("*/api/v2/ability/:id/", function handler(info) {
    return new Response(JSON.stringify(createAbilityRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});