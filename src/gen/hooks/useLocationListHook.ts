import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LocationListQueryResponseType, LocationListQueryParamsType } from "../ts/LocationListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type LocationListClient = typeof client<LocationListQueryResponseType, Error, never>;
type LocationList = {
    data: LocationListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: LocationListQueryParamsType;
    headerParams: never;
    response: LocationListQueryResponseType;
    client: {
        parameters: Partial<Parameters<LocationListClient>[0]>;
        return: Awaited<ReturnType<LocationListClient>>;
    };
};
export const locationListQueryKey = (params?: LocationList["queryParams"]) => ["v5", { url: "/api/v2/location/" }, ...(params ? [params] : [])] as const;
export type LocationListQueryKey = ReturnType<typeof locationListQueryKey>;
export function locationListQueryOptions(params?: LocationList["queryParams"], options: LocationList["client"]["parameters"] = {}) {
    const queryKey = locationListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LocationList["data"], LocationList["error"]>({
                method: "get",
                url: `/api/v2/location/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 * @summary List locations
 * @link /api/v2/location/
 */
export function useLocationListHook<TData = LocationList["response"], TQueryData = LocationList["response"], TQueryKey extends QueryKey = LocationListQueryKey>(params?: LocationList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<LocationList["response"], LocationList["error"], TData, TQueryData, TQueryKey>>;
    client?: LocationList["client"]["parameters"];
} = {}): UseQueryResult<TData, LocationList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? locationListQueryKey(params);
    const query = useQuery({
        ...locationListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, LocationList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const locationListSuspenseQueryKey = (params?: LocationList["queryParams"]) => ["v5", { url: "/api/v2/location/" }, ...(params ? [params] : [])] as const;
export type LocationListSuspenseQueryKey = ReturnType<typeof locationListSuspenseQueryKey>;
export function locationListSuspenseQueryOptions(params?: LocationList["queryParams"], options: LocationList["client"]["parameters"] = {}) {
    const queryKey = locationListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LocationList["data"], LocationList["error"]>({
                method: "get",
                url: `/api/v2/location/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 * @summary List locations
 * @link /api/v2/location/
 */
export function useLocationListHookSuspense<TData = LocationList["response"], TQueryKey extends QueryKey = LocationListSuspenseQueryKey>(params?: LocationList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<LocationList["response"], LocationList["error"], TData, TQueryKey>>;
    client?: LocationList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, LocationList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? locationListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...locationListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, LocationList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}