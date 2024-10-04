import { http } from "msw";
import { createGenerationRetrieveQueryResponse } from "../../mocks/gamesMocks/createGenerationRetrieve";


export const generationRetrieveHandler = http.get("*/api/v2/generation/:id/", function handler(info) {
    return new Response(JSON.stringify(createGenerationRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});