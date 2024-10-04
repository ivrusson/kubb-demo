import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LocationRetrieveQueryResponseType, LocationRetrievePathParamsType } from "../ts/LocationRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type LocationRetrieveClient = typeof client<LocationRetrieveQueryResponseType, Error, never>;
type LocationRetrieve = {
    data: LocationRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: LocationRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: LocationRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<LocationRetrieveClient>[0]>;
        return: Awaited<ReturnType<LocationRetrieveClient>>;
    };
};
export const locationRetrieveQueryKey = (id: LocationRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/location/:id/", params: { id: id } }] as const;
export type LocationRetrieveQueryKey = ReturnType<typeof locationRetrieveQueryKey>;
export function locationRetrieveQueryOptions(id: LocationRetrievePathParamsType["id"], options: LocationRetrieve["client"]["parameters"] = {}) {
    const queryKey = locationRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LocationRetrieve["data"], LocationRetrieve["error"]>({
                method: "get",
                url: `/api/v2/location/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 * @summary Get location
 * @link /api/v2/location/:id/
 */
export function useLocationRetrieveHook<TData = LocationRetrieve["response"], TQueryData = LocationRetrieve["response"], TQueryKey extends QueryKey = LocationRetrieveQueryKey>(id: LocationRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<LocationRetrieve["response"], LocationRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: LocationRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, LocationRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? locationRetrieveQueryKey(id);
    const query = useQuery({
        ...locationRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, LocationRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const locationRetrieveSuspenseQueryKey = (id: LocationRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/location/:id/", params: { id: id } }] as const;
export type LocationRetrieveSuspenseQueryKey = ReturnType<typeof locationRetrieveSuspenseQueryKey>;
export function locationRetrieveSuspenseQueryOptions(id: LocationRetrievePathParamsType["id"], options: LocationRetrieve["client"]["parameters"] = {}) {
    const queryKey = locationRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LocationRetrieve["data"], LocationRetrieve["error"]>({
                method: "get",
                url: `/api/v2/location/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.
 * @summary Get location
 * @link /api/v2/location/:id/
 */
export function useLocationRetrieveHookSuspense<TData = LocationRetrieve["response"], TQueryKey extends QueryKey = LocationRetrieveSuspenseQueryKey>(id: LocationRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<LocationRetrieve["response"], LocationRetrieve["error"], TData, TQueryKey>>;
    client?: LocationRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, LocationRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? locationRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...locationRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, LocationRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}