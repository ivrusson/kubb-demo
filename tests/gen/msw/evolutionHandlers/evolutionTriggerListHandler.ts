import { http } from "msw";
import { createEvolutionTriggerListQueryResponse } from "../../mocks/evolutionMocks/createEvolutionTriggerList";


export const evolutionTriggerListHandler = http.get("*/api/v2/evolution-trigger/", function handler(info) {
    return new Response(JSON.stringify(createEvolutionTriggerListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});