import { http } from "msw";
import { createBerryListQueryResponse } from "../../mocks/berriesMocks/createBerryList";


export const berryListHandler = http.get("*/api/v2/berry/", function handler(info) {
    return new Response(JSON.stringify(createBerryListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});