import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LocationAreaListQueryResponseType, LocationAreaListQueryParamsType } from "../ts/LocationAreaListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type LocationAreaListClient = typeof client<LocationAreaListQueryResponseType, Error, never>;
type LocationAreaList = {
    data: LocationAreaListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: LocationAreaListQueryParamsType;
    headerParams: never;
    response: LocationAreaListQueryResponseType;
    client: {
        parameters: Partial<Parameters<LocationAreaListClient>[0]>;
        return: Awaited<ReturnType<LocationAreaListClient>>;
    };
};
export const locationAreaListQueryKey = (params?: LocationAreaList["queryParams"]) => ["v5", { url: "/api/v2/location-area/" }, ...(params ? [params] : [])] as const;
export type LocationAreaListQueryKey = ReturnType<typeof locationAreaListQueryKey>;
export function locationAreaListQueryOptions(params?: LocationAreaList["queryParams"], options: LocationAreaList["client"]["parameters"] = {}) {
    const queryKey = locationAreaListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LocationAreaList["data"], LocationAreaList["error"]>({
                method: "get",
                url: `/api/v2/location-area/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 * @summary List location areas
 * @link /api/v2/location-area/
 */
export function useLocationAreaListHook<TData = LocationAreaList["response"], TQueryData = LocationAreaList["response"], TQueryKey extends QueryKey = LocationAreaListQueryKey>(params?: LocationAreaList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<LocationAreaList["response"], LocationAreaList["error"], TData, TQueryData, TQueryKey>>;
    client?: LocationAreaList["client"]["parameters"];
} = {}): UseQueryResult<TData, LocationAreaList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? locationAreaListQueryKey(params);
    const query = useQuery({
        ...locationAreaListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, LocationAreaList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const locationAreaListSuspenseQueryKey = (params?: LocationAreaList["queryParams"]) => ["v5", { url: "/api/v2/location-area/" }, ...(params ? [params] : [])] as const;
export type LocationAreaListSuspenseQueryKey = ReturnType<typeof locationAreaListSuspenseQueryKey>;
export function locationAreaListSuspenseQueryOptions(params?: LocationAreaList["queryParams"], options: LocationAreaList["client"]["parameters"] = {}) {
    const queryKey = locationAreaListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LocationAreaList["data"], LocationAreaList["error"]>({
                method: "get",
                url: `/api/v2/location-area/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 * @summary List location areas
 * @link /api/v2/location-area/
 */
export function useLocationAreaListHookSuspense<TData = LocationAreaList["response"], TQueryKey extends QueryKey = LocationAreaListSuspenseQueryKey>(params?: LocationAreaList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<LocationAreaList["response"], LocationAreaList["error"], TData, TQueryKey>>;
    client?: LocationAreaList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, LocationAreaList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? locationAreaListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...locationAreaListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, LocationAreaList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}