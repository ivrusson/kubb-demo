import { http } from "msw";
import { createEncounterConditionValueListQueryResponse } from "../../mocks/encountersMocks/createEncounterConditionValueList";


export const encounterConditionValueListHandler = http.get("*/api/v2/encounter-condition-value/", function handler(info) {
    return new Response(JSON.stringify(createEncounterConditionValueListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});