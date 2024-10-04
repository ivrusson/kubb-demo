import { http } from "msw";
import { createBerryFirmnessListQueryResponse } from "../../mocks/berriesMocks/createBerryFirmnessList";


export const berryFirmnessListHandler = http.get("*/api/v2/berry-firmness/", function handler(info) {
    return new Response(JSON.stringify(createBerryFirmnessListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});