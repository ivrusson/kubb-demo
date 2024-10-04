import type { ItemAttributeDescriptionType } from "./ItemAttributeDescriptionType";
import type { ItemAttributeNameType } from "./ItemAttributeNameType";

 export type ItemAttributeDetailType = {
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
    readonly descriptions: ItemAttributeDescriptionType[];
    /**
     * @type array
    */
    readonly items: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    }[];
    /**
     * @type array
    */
    readonly names: ItemAttributeNameType[];
};