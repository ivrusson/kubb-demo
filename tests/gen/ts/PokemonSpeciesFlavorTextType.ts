import type { LanguageSummaryType } from "./LanguageSummaryType";
import type { VersionSummaryType } from "./VersionSummaryType";

 export type PokemonSpeciesFlavorTextType = {
    /**
     * @type string
    */
    flavor_text: string;
    /**
     * @type object
    */
    language: LanguageSummaryType;
    /**
     * @type object
    */
    version: VersionSummaryType;
};