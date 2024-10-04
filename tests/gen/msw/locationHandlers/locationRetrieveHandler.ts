import { http } from "msw";
import { createLocationRetrieveQueryResponse } from "../../mocks/locationMocks/createLocationRetrieve";


export const locationRetrieveHandler = http.get("*/api/v2/location/:id/", function handler(info) {
    return new Response(JSON.stringify(createLocationRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});