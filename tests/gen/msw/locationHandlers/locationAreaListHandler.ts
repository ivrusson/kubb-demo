import { http } from "msw";
import { createLocationAreaListQueryResponse } from "../../mocks/locationMocks/createLocationAreaList";


export const locationAreaListHandler = http.get("*/api/v2/location-area/", function handler(info) {
    return new Response(JSON.stringify(createLocationAreaListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});