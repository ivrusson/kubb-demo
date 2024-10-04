import { http } from "msw";
import { createRegionRetrieveQueryResponse } from "../../mocks/locationMocks/createRegionRetrieve";


export const regionRetrieveHandler = http.get("*/api/v2/region/:id/", function handler(info) {
    return new Response(JSON.stringify(createRegionRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});