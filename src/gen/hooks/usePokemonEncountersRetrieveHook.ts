import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonEncountersRetrieveQueryResponseType, PokemonEncountersRetrievePathParamsType } from "../ts/PokemonEncountersRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonEncountersRetrieveClient = typeof client<PokemonEncountersRetrieveQueryResponseType, Error, never>;
type PokemonEncountersRetrieve = {
    data: PokemonEncountersRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokemonEncountersRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokemonEncountersRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonEncountersRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokemonEncountersRetrieveClient>>;
    };
};
export const pokemonEncountersRetrieveQueryKey = (pokemonId: PokemonEncountersRetrievePathParamsType["pokemon_id"]) => ["v5", { url: "/api/v2/pokemon/:pokemon_id/encounters", params: { pokemonId: pokemonId } }] as const;
export type PokemonEncountersRetrieveQueryKey = ReturnType<typeof pokemonEncountersRetrieveQueryKey>;
export function pokemonEncountersRetrieveQueryOptions(pokemonId: PokemonEncountersRetrievePathParamsType["pokemon_id"], options: PokemonEncountersRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonEncountersRetrieveQueryKey(pokemonId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonEncountersRetrieve["data"], PokemonEncountersRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon/${pokemonId}/encounters`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Handles Pokemon Encounters as a sub-resource.
 * @summary Get pokemon encounter
 * @link /api/v2/pokemon/:pokemon_id/encounters
 */
export function usePokemonEncountersRetrieveHook<TData = PokemonEncountersRetrieve["response"], TQueryData = PokemonEncountersRetrieve["response"], TQueryKey extends QueryKey = PokemonEncountersRetrieveQueryKey>(pokemonId: PokemonEncountersRetrievePathParamsType["pokemon_id"], options: {
    query?: Partial<QueryObserverOptions<PokemonEncountersRetrieve["response"], PokemonEncountersRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonEncountersRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonEncountersRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonEncountersRetrieveQueryKey(pokemonId);
    const query = useQuery({
        ...pokemonEncountersRetrieveQueryOptions(pokemonId, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonEncountersRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonEncountersRetrieveSuspenseQueryKey = (pokemonId: PokemonEncountersRetrievePathParamsType["pokemon_id"]) => ["v5", { url: "/api/v2/pokemon/:pokemon_id/encounters", params: { pokemonId: pokemonId } }] as const;
export type PokemonEncountersRetrieveSuspenseQueryKey = ReturnType<typeof pokemonEncountersRetrieveSuspenseQueryKey>;
export function pokemonEncountersRetrieveSuspenseQueryOptions(pokemonId: PokemonEncountersRetrievePathParamsType["pokemon_id"], options: PokemonEncountersRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonEncountersRetrieveSuspenseQueryKey(pokemonId);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonEncountersRetrieve["data"], PokemonEncountersRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon/${pokemonId}/encounters`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Handles Pokemon Encounters as a sub-resource.
 * @summary Get pokemon encounter
 * @link /api/v2/pokemon/:pokemon_id/encounters
 */
export function usePokemonEncountersRetrieveHookSuspense<TData = PokemonEncountersRetrieve["response"], TQueryKey extends QueryKey = PokemonEncountersRetrieveSuspenseQueryKey>(pokemonId: PokemonEncountersRetrievePathParamsType["pokemon_id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonEncountersRetrieve["response"], PokemonEncountersRetrieve["error"], TData, TQueryKey>>;
    client?: PokemonEncountersRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonEncountersRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonEncountersRetrieveSuspenseQueryKey(pokemonId);
    const query = useSuspenseQuery({
        ...pokemonEncountersRetrieveSuspenseQueryOptions(pokemonId, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonEncountersRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}