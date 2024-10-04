import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokedexRetrieveQueryResponseType, PokedexRetrievePathParamsType } from "../ts/PokedexRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokedexRetrieveClient = typeof client<PokedexRetrieveQueryResponseType, Error, never>;
type PokedexRetrieve = {
    data: PokedexRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokedexRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokedexRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokedexRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokedexRetrieveClient>>;
    };
};
export const pokedexRetrieveQueryKey = (id: PokedexRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokedex/:id/", params: { id: id } }] as const;
export type PokedexRetrieveQueryKey = ReturnType<typeof pokedexRetrieveQueryKey>;
export function pokedexRetrieveQueryOptions(id: PokedexRetrievePathParamsType["id"], options: PokedexRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokedexRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokedexRetrieve["data"], PokedexRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokedex/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 * @summary Get pokedex
 * @link /api/v2/pokedex/:id/
 */
export function usePokedexRetrieveHook<TData = PokedexRetrieve["response"], TQueryData = PokedexRetrieve["response"], TQueryKey extends QueryKey = PokedexRetrieveQueryKey>(id: PokedexRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PokedexRetrieve["response"], PokedexRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokedexRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokedexRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokedexRetrieveQueryKey(id);
    const query = useQuery({
        ...pokedexRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokedexRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokedexRetrieveSuspenseQueryKey = (id: PokedexRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokedex/:id/", params: { id: id } }] as const;
export type PokedexRetrieveSuspenseQueryKey = ReturnType<typeof pokedexRetrieveSuspenseQueryKey>;
export function pokedexRetrieveSuspenseQueryOptions(id: PokedexRetrievePathParamsType["id"], options: PokedexRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokedexRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokedexRetrieve["data"], PokedexRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokedex/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.
 * @summary Get pokedex
 * @link /api/v2/pokedex/:id/
 */
export function usePokedexRetrieveHookSuspense<TData = PokedexRetrieve["response"], TQueryKey extends QueryKey = PokedexRetrieveSuspenseQueryKey>(id: PokedexRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokedexRetrieve["response"], PokedexRetrieve["error"], TData, TQueryKey>>;
    client?: PokedexRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokedexRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokedexRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pokedexRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokedexRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}