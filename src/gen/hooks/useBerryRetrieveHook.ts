import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { BerryRetrieveQueryResponseType, BerryRetrievePathParamsType } from "../ts/BerryRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type BerryRetrieveClient = typeof client<BerryRetrieveQueryResponseType, Error, never>;
type BerryRetrieve = {
    data: BerryRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: BerryRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: BerryRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<BerryRetrieveClient>[0]>;
        return: Awaited<ReturnType<BerryRetrieveClient>>;
    };
};
export const berryRetrieveQueryKey = (id: BerryRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/berry/:id/", params: { id: id } }] as const;
export type BerryRetrieveQueryKey = ReturnType<typeof berryRetrieveQueryKey>;
export function berryRetrieveQueryOptions(id: BerryRetrievePathParamsType["id"], options: BerryRetrieve["client"]["parameters"] = {}) {
    const queryKey = berryRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryRetrieve["data"], BerryRetrieve["error"]>({
                method: "get",
                url: `/api/v2/berry/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
 * @summary Get a berry
 * @link /api/v2/berry/:id/
 */
export function useBerryRetrieveHook<TData = BerryRetrieve["response"], TQueryData = BerryRetrieve["response"], TQueryKey extends QueryKey = BerryRetrieveQueryKey>(id: BerryRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<BerryRetrieve["response"], BerryRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: BerryRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, BerryRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryRetrieveQueryKey(id);
    const query = useQuery({
        ...berryRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, BerryRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const berryRetrieveSuspenseQueryKey = (id: BerryRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/berry/:id/", params: { id: id } }] as const;
export type BerryRetrieveSuspenseQueryKey = ReturnType<typeof berryRetrieveSuspenseQueryKey>;
export function berryRetrieveSuspenseQueryOptions(id: BerryRetrievePathParamsType["id"], options: BerryRetrieve["client"]["parameters"] = {}) {
    const queryKey = berryRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryRetrieve["data"], BerryRetrieve["error"]>({
                method: "get",
                url: `/api/v2/berry/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.
 * @summary Get a berry
 * @link /api/v2/berry/:id/
 */
export function useBerryRetrieveHookSuspense<TData = BerryRetrieve["response"], TQueryKey extends QueryKey = BerryRetrieveSuspenseQueryKey>(id: BerryRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<BerryRetrieve["response"], BerryRetrieve["error"], TData, TQueryKey>>;
    client?: BerryRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, BerryRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...berryRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, BerryRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}