import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokeathlonStatRetrieveQueryResponseType, PokeathlonStatRetrievePathParamsType } from "../ts/PokeathlonStatRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokeathlonStatRetrieveClient = typeof client<PokeathlonStatRetrieveQueryResponseType, Error, never>;
type PokeathlonStatRetrieve = {
    data: PokeathlonStatRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokeathlonStatRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokeathlonStatRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokeathlonStatRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokeathlonStatRetrieveClient>>;
    };
};
export const pokeathlonStatRetrieveQueryKey = (id: PokeathlonStatRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokeathlon-stat/:id/", params: { id: id } }] as const;
export type PokeathlonStatRetrieveQueryKey = ReturnType<typeof pokeathlonStatRetrieveQueryKey>;
export function pokeathlonStatRetrieveQueryOptions(id: PokeathlonStatRetrievePathParamsType["id"], options: PokeathlonStatRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokeathlonStatRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokeathlonStatRetrieve["data"], PokeathlonStatRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokeathlon-stat/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
 * @summary Get pokeathlon stat
 * @link /api/v2/pokeathlon-stat/:id/
 */
export function usePokeathlonStatRetrieveHook<TData = PokeathlonStatRetrieve["response"], TQueryData = PokeathlonStatRetrieve["response"], TQueryKey extends QueryKey = PokeathlonStatRetrieveQueryKey>(id: PokeathlonStatRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PokeathlonStatRetrieve["response"], PokeathlonStatRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokeathlonStatRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokeathlonStatRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokeathlonStatRetrieveQueryKey(id);
    const query = useQuery({
        ...pokeathlonStatRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokeathlonStatRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokeathlonStatRetrieveSuspenseQueryKey = (id: PokeathlonStatRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokeathlon-stat/:id/", params: { id: id } }] as const;
export type PokeathlonStatRetrieveSuspenseQueryKey = ReturnType<typeof pokeathlonStatRetrieveSuspenseQueryKey>;
export function pokeathlonStatRetrieveSuspenseQueryOptions(id: PokeathlonStatRetrievePathParamsType["id"], options: PokeathlonStatRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokeathlonStatRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokeathlonStatRetrieve["data"], PokeathlonStatRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokeathlon-stat/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pokeathlon Stats are different attributes of a Pokémon's performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.
 * @summary Get pokeathlon stat
 * @link /api/v2/pokeathlon-stat/:id/
 */
export function usePokeathlonStatRetrieveHookSuspense<TData = PokeathlonStatRetrieve["response"], TQueryKey extends QueryKey = PokeathlonStatRetrieveSuspenseQueryKey>(id: PokeathlonStatRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokeathlonStatRetrieve["response"], PokeathlonStatRetrieve["error"], TData, TQueryKey>>;
    client?: PokeathlonStatRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokeathlonStatRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokeathlonStatRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pokeathlonStatRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokeathlonStatRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}