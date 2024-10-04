import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { BerryFlavorRetrieveQueryResponseType, BerryFlavorRetrievePathParamsType } from "../ts/BerryFlavorRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type BerryFlavorRetrieveClient = typeof client<BerryFlavorRetrieveQueryResponseType, Error, never>;
type BerryFlavorRetrieve = {
    data: BerryFlavorRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: BerryFlavorRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: BerryFlavorRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<BerryFlavorRetrieveClient>[0]>;
        return: Awaited<ReturnType<BerryFlavorRetrieveClient>>;
    };
};
export const berryFlavorRetrieveQueryKey = (id: BerryFlavorRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/berry-flavor/:id/", params: { id: id } }] as const;
export type BerryFlavorRetrieveQueryKey = ReturnType<typeof berryFlavorRetrieveQueryKey>;
export function berryFlavorRetrieveQueryOptions(id: BerryFlavorRetrievePathParamsType["id"], options: BerryFlavorRetrieve["client"]["parameters"] = {}) {
    const queryKey = berryFlavorRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryFlavorRetrieve["data"], BerryFlavorRetrieve["error"]>({
                method: "get",
                url: `/api/v2/berry-flavor/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 * @summary Get berries by flavor
 * @link /api/v2/berry-flavor/:id/
 */
export function useBerryFlavorRetrieveHook<TData = BerryFlavorRetrieve["response"], TQueryData = BerryFlavorRetrieve["response"], TQueryKey extends QueryKey = BerryFlavorRetrieveQueryKey>(id: BerryFlavorRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<BerryFlavorRetrieve["response"], BerryFlavorRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: BerryFlavorRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, BerryFlavorRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryFlavorRetrieveQueryKey(id);
    const query = useQuery({
        ...berryFlavorRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, BerryFlavorRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const berryFlavorRetrieveSuspenseQueryKey = (id: BerryFlavorRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/berry-flavor/:id/", params: { id: id } }] as const;
export type BerryFlavorRetrieveSuspenseQueryKey = ReturnType<typeof berryFlavorRetrieveSuspenseQueryKey>;
export function berryFlavorRetrieveSuspenseQueryOptions(id: BerryFlavorRetrievePathParamsType["id"], options: BerryFlavorRetrieve["client"]["parameters"] = {}) {
    const queryKey = berryFlavorRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<BerryFlavorRetrieve["data"], BerryFlavorRetrieve["error"]>({
                method: "get",
                url: `/api/v2/berry-flavor/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.
 * @summary Get berries by flavor
 * @link /api/v2/berry-flavor/:id/
 */
export function useBerryFlavorRetrieveHookSuspense<TData = BerryFlavorRetrieve["response"], TQueryKey extends QueryKey = BerryFlavorRetrieveSuspenseQueryKey>(id: BerryFlavorRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<BerryFlavorRetrieve["response"], BerryFlavorRetrieve["error"], TData, TQueryKey>>;
    client?: BerryFlavorRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, BerryFlavorRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? berryFlavorRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...berryFlavorRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, BerryFlavorRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}