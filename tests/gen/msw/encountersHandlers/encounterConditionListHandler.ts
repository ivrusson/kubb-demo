import { http } from "msw";
import { createEncounterConditionListQueryResponse } from "../../mocks/encountersMocks/createEncounterConditionList";


export const encounterConditionListHandler = http.get("*/api/v2/encounter-condition/", function handler(info) {
    return new Response(JSON.stringify(createEncounterConditionListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});