import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonSpeciesRetrieveQueryResponseType, PokemonSpeciesRetrievePathParamsType } from "../ts/PokemonSpeciesRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonSpeciesRetrieveClient = typeof client<PokemonSpeciesRetrieveQueryResponseType, Error, never>;
type PokemonSpeciesRetrieve = {
    data: PokemonSpeciesRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokemonSpeciesRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokemonSpeciesRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonSpeciesRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokemonSpeciesRetrieveClient>>;
    };
};
export const pokemonSpeciesRetrieveQueryKey = (id: PokemonSpeciesRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-species/:id/", params: { id: id } }] as const;
export type PokemonSpeciesRetrieveQueryKey = ReturnType<typeof pokemonSpeciesRetrieveQueryKey>;
export function pokemonSpeciesRetrieveQueryOptions(id: PokemonSpeciesRetrievePathParamsType["id"], options: PokemonSpeciesRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonSpeciesRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonSpeciesRetrieve["data"], PokemonSpeciesRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-species/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
 * @summary Get pokemon species
 * @link /api/v2/pokemon-species/:id/
 */
export function usePokemonSpeciesRetrieveHook<TData = PokemonSpeciesRetrieve["response"], TQueryData = PokemonSpeciesRetrieve["response"], TQueryKey extends QueryKey = PokemonSpeciesRetrieveQueryKey>(id: PokemonSpeciesRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PokemonSpeciesRetrieve["response"], PokemonSpeciesRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonSpeciesRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonSpeciesRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonSpeciesRetrieveQueryKey(id);
    const query = useQuery({
        ...pokemonSpeciesRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonSpeciesRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonSpeciesRetrieveSuspenseQueryKey = (id: PokemonSpeciesRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-species/:id/", params: { id: id } }] as const;
export type PokemonSpeciesRetrieveSuspenseQueryKey = ReturnType<typeof pokemonSpeciesRetrieveSuspenseQueryKey>;
export function pokemonSpeciesRetrieveSuspenseQueryOptions(id: PokemonSpeciesRetrievePathParamsType["id"], options: PokemonSpeciesRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonSpeciesRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonSpeciesRetrieve["data"], PokemonSpeciesRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-species/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.
 * @summary Get pokemon species
 * @link /api/v2/pokemon-species/:id/
 */
export function usePokemonSpeciesRetrieveHookSuspense<TData = PokemonSpeciesRetrieve["response"], TQueryKey extends QueryKey = PokemonSpeciesRetrieveSuspenseQueryKey>(id: PokemonSpeciesRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonSpeciesRetrieve["response"], PokemonSpeciesRetrieve["error"], TData, TQueryKey>>;
    client?: PokemonSpeciesRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonSpeciesRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonSpeciesRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pokemonSpeciesRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonSpeciesRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}