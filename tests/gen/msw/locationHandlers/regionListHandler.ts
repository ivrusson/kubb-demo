import { http } from "msw";
import { createRegionListQueryResponse } from "../../mocks/locationMocks/createRegionList";


export const regionListHandler = http.get("*/api/v2/region/", function handler(info) {
    return new Response(JSON.stringify(createRegionListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});