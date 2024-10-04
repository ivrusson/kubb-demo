import { http } from "msw";
import { createEncounterMethodRetrieveQueryResponse } from "../../mocks/encountersMocks/createEncounterMethodRetrieve";


export const encounterMethodRetrieveHandler = http.get("*/api/v2/encounter-method/:id/", function handler(info) {
    return new Response(JSON.stringify(createEncounterMethodRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});