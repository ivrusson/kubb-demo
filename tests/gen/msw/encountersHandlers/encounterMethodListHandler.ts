import { http } from "msw";
import { createEncounterMethodListQueryResponse } from "../../mocks/encountersMocks/createEncounterMethodList";


export const encounterMethodListHandler = http.get("*/api/v2/encounter-method/", function handler(info) {
    return new Response(JSON.stringify(createEncounterMethodListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});