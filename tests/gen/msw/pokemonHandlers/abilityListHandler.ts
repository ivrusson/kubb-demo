import { http } from "msw";
import { createAbilityListQueryResponse } from "../../mocks/pokemonMocks/createAbilityList";


export const abilityListHandler = http.get("*/api/v2/ability/", function handler(info) {
    return new Response(JSON.stringify(createAbilityListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});