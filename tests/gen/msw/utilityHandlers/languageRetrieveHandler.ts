import { http } from "msw";
import { createLanguageRetrieveQueryResponse } from "../../mocks/utilityMocks/createLanguageRetrieve";


export const languageRetrieveHandler = http.get("*/api/v2/language/:id/", function handler(info) {
    return new Response(JSON.stringify(createLanguageRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});