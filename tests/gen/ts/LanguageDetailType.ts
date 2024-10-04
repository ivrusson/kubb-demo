import type { LanguageNameType } from "./LanguageNameType";

 export type LanguageDetailType = {
    /**
     * @type integer
    */
    readonly id: number;
    /**
     * @type string
    */
    name: string;
    /**
     * @type boolean | undefined
    */
    official?: boolean;
    /**
     * @type string
    */
    iso639: string;
    /**
     * @type string
    */
    iso3166: string;
    /**
     * @type array
    */
    readonly names: LanguageNameType[];
};