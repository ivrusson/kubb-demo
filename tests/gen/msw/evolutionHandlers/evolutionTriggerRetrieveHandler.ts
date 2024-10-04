import { http } from "msw";
import { createEvolutionTriggerRetrieveQueryResponse } from "../../mocks/evolutionMocks/createEvolutionTriggerRetrieve";


export const evolutionTriggerRetrieveHandler = http.get("*/api/v2/evolution-trigger/:id/", function handler(info) {
    return new Response(JSON.stringify(createEvolutionTriggerRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});