import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { GrowthRateRetrieveQueryResponseType, GrowthRateRetrievePathParamsType } from "../ts/GrowthRateRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type GrowthRateRetrieveClient = typeof client<GrowthRateRetrieveQueryResponseType, Error, never>;
type GrowthRateRetrieve = {
    data: GrowthRateRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: GrowthRateRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: GrowthRateRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<GrowthRateRetrieveClient>[0]>;
        return: Awaited<ReturnType<GrowthRateRetrieveClient>>;
    };
};
export const growthRateRetrieveQueryKey = (id: GrowthRateRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/growth-rate/:id/", params: { id: id } }] as const;
export type GrowthRateRetrieveQueryKey = ReturnType<typeof growthRateRetrieveQueryKey>;
export function growthRateRetrieveQueryOptions(id: GrowthRateRetrievePathParamsType["id"], options: GrowthRateRetrieve["client"]["parameters"] = {}) {
    const queryKey = growthRateRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GrowthRateRetrieve["data"], GrowthRateRetrieve["error"]>({
                method: "get",
                url: `/api/v2/growth-rate/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
 * @summary Get growth rate
 * @link /api/v2/growth-rate/:id/
 */
export function useGrowthRateRetrieveHook<TData = GrowthRateRetrieve["response"], TQueryData = GrowthRateRetrieve["response"], TQueryKey extends QueryKey = GrowthRateRetrieveQueryKey>(id: GrowthRateRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<GrowthRateRetrieve["response"], GrowthRateRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: GrowthRateRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, GrowthRateRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? growthRateRetrieveQueryKey(id);
    const query = useQuery({
        ...growthRateRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, GrowthRateRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const growthRateRetrieveSuspenseQueryKey = (id: GrowthRateRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/growth-rate/:id/", params: { id: id } }] as const;
export type GrowthRateRetrieveSuspenseQueryKey = ReturnType<typeof growthRateRetrieveSuspenseQueryKey>;
export function growthRateRetrieveSuspenseQueryOptions(id: GrowthRateRetrievePathParamsType["id"], options: GrowthRateRetrieve["client"]["parameters"] = {}) {
    const queryKey = growthRateRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<GrowthRateRetrieve["data"], GrowthRateRetrieve["error"]>({
                method: "get",
                url: `/api/v2/growth-rate/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.
 * @summary Get growth rate
 * @link /api/v2/growth-rate/:id/
 */
export function useGrowthRateRetrieveHookSuspense<TData = GrowthRateRetrieve["response"], TQueryKey extends QueryKey = GrowthRateRetrieveSuspenseQueryKey>(id: GrowthRateRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<GrowthRateRetrieve["response"], GrowthRateRetrieve["error"], TData, TQueryKey>>;
    client?: GrowthRateRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, GrowthRateRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? growthRateRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...growthRateRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, GrowthRateRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}