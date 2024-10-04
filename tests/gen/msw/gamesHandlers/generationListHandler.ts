import { http } from "msw";
import { createGenerationListQueryResponse } from "../../mocks/gamesMocks/createGenerationList";


export const generationListHandler = http.get("*/api/v2/generation/", function handler(info) {
    return new Response(JSON.stringify(createGenerationListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});