import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonColorRetrieveQueryResponseType, PokemonColorRetrievePathParamsType } from "../ts/PokemonColorRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonColorRetrieveClient = typeof client<PokemonColorRetrieveQueryResponseType, Error, never>;
type PokemonColorRetrieve = {
    data: PokemonColorRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokemonColorRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokemonColorRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonColorRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokemonColorRetrieveClient>>;
    };
};
export const pokemonColorRetrieveQueryKey = (id: PokemonColorRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-color/:id/", params: { id: id } }] as const;
export type PokemonColorRetrieveQueryKey = ReturnType<typeof pokemonColorRetrieveQueryKey>;
export function pokemonColorRetrieveQueryOptions(id: PokemonColorRetrievePathParamsType["id"], options: PokemonColorRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonColorRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonColorRetrieve["data"], PokemonColorRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-color/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 * @summary Get pokemon color
 * @link /api/v2/pokemon-color/:id/
 */
export function usePokemonColorRetrieveHook<TData = PokemonColorRetrieve["response"], TQueryData = PokemonColorRetrieve["response"], TQueryKey extends QueryKey = PokemonColorRetrieveQueryKey>(id: PokemonColorRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PokemonColorRetrieve["response"], PokemonColorRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonColorRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonColorRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonColorRetrieveQueryKey(id);
    const query = useQuery({
        ...pokemonColorRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonColorRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonColorRetrieveSuspenseQueryKey = (id: PokemonColorRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-color/:id/", params: { id: id } }] as const;
export type PokemonColorRetrieveSuspenseQueryKey = ReturnType<typeof pokemonColorRetrieveSuspenseQueryKey>;
export function pokemonColorRetrieveSuspenseQueryOptions(id: PokemonColorRetrievePathParamsType["id"], options: PokemonColorRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonColorRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonColorRetrieve["data"], PokemonColorRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-color/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.
 * @summary Get pokemon color
 * @link /api/v2/pokemon-color/:id/
 */
export function usePokemonColorRetrieveHookSuspense<TData = PokemonColorRetrieve["response"], TQueryKey extends QueryKey = PokemonColorRetrieveSuspenseQueryKey>(id: PokemonColorRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonColorRetrieve["response"], PokemonColorRetrieve["error"], TData, TQueryKey>>;
    client?: PokemonColorRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonColorRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonColorRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pokemonColorRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonColorRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}