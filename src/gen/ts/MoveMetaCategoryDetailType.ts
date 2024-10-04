import type { MoveMetaCategoryDescriptionType } from "./MoveMetaCategoryDescriptionType";

 export type MoveMetaCategoryDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type array
    */
    readonly descriptions: MoveMetaCategoryDescriptionType[];
    /**
     * @type array
    */
    readonly moves: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
};