import { http } from "msw";
import { createLocationAreaRetrieveQueryResponse } from "../../mocks/locationMocks/createLocationAreaRetrieve";


export const locationAreaRetrieveHandler = http.get("*/api/v2/location-area/:id/", function handler(info) {
    return new Response(JSON.stringify(createLocationAreaRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});