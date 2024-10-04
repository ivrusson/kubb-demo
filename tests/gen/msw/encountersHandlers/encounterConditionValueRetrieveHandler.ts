import { http } from "msw";
import { createEncounterConditionValueRetrieveQueryResponse } from "../../mocks/encountersMocks/createEncounterConditionValueRetrieve";


export const encounterConditionValueRetrieveHandler = http.get("*/api/v2/encounter-condition-value/:id/", function handler(info) {
    return new Response(JSON.stringify(createEncounterConditionValueRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});