import type { LanguageSummaryType } from "./LanguageSummaryType";

 export type PokemonSpeciesDescriptionType = {
    /**
     * @type string | undefined
    */
    description?: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
};