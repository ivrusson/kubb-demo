import { http } from "msw";
import { createGrowthRateListQueryResponse } from "../../mocks/pokemonMocks/createGrowthRateList";


export const growthRateListHandler = http.get("*/api/v2/growth-rate/", function handler(info) {
    return new Response(JSON.stringify(createGrowthRateListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});