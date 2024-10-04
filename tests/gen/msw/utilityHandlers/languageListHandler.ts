import { http } from "msw";
import { createLanguageListQueryResponse } from "../../mocks/utilityMocks/createLanguageList";


export const languageListHandler = http.get("*/api/v2/language/", function handler(info) {
    return new Response(JSON.stringify(createLanguageListQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});