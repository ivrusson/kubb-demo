import { http } from "msw";
import { createPalParkAreaListQueryResponse } from "../../mocks/locationMocks/createPalParkAreaList";


export const palParkAreaListHandler = http.get("*/api/v2/pal-park-area/", function handler(info) {
    return new Response(JSON.stringify(createPalParkAreaListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});