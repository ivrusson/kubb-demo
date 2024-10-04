import { http } from "msw";
import { createEncounterConditionRetrieveQueryResponse } from "../../mocks/encountersMocks/createEncounterConditionRetrieve";


export const encounterConditionRetrieveHandler = http.get("*/api/v2/encounter-condition/:id/", function handler(info) {
    return new Response(JSON.stringify(createEncounterConditionRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});