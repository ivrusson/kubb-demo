import { http } from "msw";
import { createGrowthRateRetrieveQueryResponse } from "../../mocks/pokemonMocks/createGrowthRateRetrieve";


export const growthRateRetrieveHandler = http.get("*/api/v2/growth-rate/:id/", function handler(info) {
    return new Response(JSON.stringify(createGrowthRateRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});