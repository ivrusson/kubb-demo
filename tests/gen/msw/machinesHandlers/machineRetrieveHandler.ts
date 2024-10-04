import { http } from "msw";
import { createMachineRetrieveQueryResponse } from "../../mocks/machinesMocks/createMachineRetrieve";


export const machineRetrieveHandler = http.get("*/api/v2/machine/:id/", function handler(info) {
    return new Response(JSON.stringify(createMachineRetrieveQueryResponse()), {
        headers: {
            "Content-Type": "application/json",
        },
    });
});