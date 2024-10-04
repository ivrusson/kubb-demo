import { http } from "msw";
import { createBerryFirmnessRetrieveQueryResponse } from "../../mocks/berriesMocks/createBerryFirmnessRetrieve";


export const berryFirmnessRetrieveHandler = http.get("*/api/v2/berry-firmness/:id/", function handler(info) {
    return new Response(JSON.stringify(createBerryFirmnessRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});