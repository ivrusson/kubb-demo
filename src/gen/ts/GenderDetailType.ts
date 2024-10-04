export type GenderDetailType = {
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
    readonly pokemon_species_details: {
        /**
         * @type integer, int32
        */
        rate: number;
        /**
         * @type object
        */
        pokemon_species: {
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
    /**
     * @type array
    */
    readonly required_for_evolution: {
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