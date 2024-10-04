import { http } from "msw";
import { createLocationListQueryResponse } from "../../mocks/locationMocks/createLocationList";


export const locationListHandler = http.get("*/api/v2/location/", function handler(info) {
    return new Response(JSON.stringify(createLocationListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});