export type PokemonEncountersRetrievePathParamsType = {
    /**
     * @type string
    */
    pokemon_id: string;
};
export type PokemonEncountersRetrieve200Type = {
    /**
     * @type object
    */
    location_area: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    };
    /**
     * @type array
    */
    version_details: {
        /**
         * @type array
        */
        encounter_details: {
            /**
             * @type number
            */
            chance: number;
            /**
             * @type array
            */
            condition_values: {
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
             * @type number
            */
            max_level: number;
            /**
             * @type object
            */
            method: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            };
            /**
             * @type number
            */
            min_level: number;
        }[];
        /**
         * @type number
        */
        max_chance: number;
        /**
         * @type object
        */
        version: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
    }[];
}[];
export type PokemonEncountersRetrieveQueryResponseType = {
    /**
     * @type object
    */
    location_area: {
        /**
         * @type string
        */
        name: string;
        /**
         * @type string, uri
        */
        url: string;
    };
    /**
     * @type array
    */
    version_details: {
        /**
         * @type array
        */
        encounter_details: {
            /**
             * @type number
            */
            chance: number;
            /**
             * @type array
            */
            condition_values: {
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
             * @type number
            */
            max_level: number;
            /**
             * @type object
            */
            method: {
                /**
                 * @type string
                */
                name: string;
                /**
                 * @type string, uri
                */
                url: string;
            };
            /**
             * @type number
            */
            min_level: number;
        }[];
        /**
         * @type number
        */
        max_chance: number;
        /**
         * @type object
        */
        version: {
            /**
             * @type string
            */
            name: string;
            /**
             * @type string, uri
            */
            url: string;
        };
    }[];
}[];
export type PokemonEncountersRetrieveTypeQuery = {
    Response: PokemonEncountersRetrieveQueryResponseType;
    PathParams: PokemonEncountersRetrievePathParamsType;
};