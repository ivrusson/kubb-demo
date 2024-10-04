import { http } from "msw";
import { createPalParkAreaRetrieveQueryResponse } from "../../mocks/locationMocks/createPalParkAreaRetrieve";


export const palParkAreaRetrieveHandler = http.get("*/api/v2/pal-park-area/:id/", function handler(info) {
    return new Response(JSON.stringify(createPalParkAreaRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});