import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { LocationAreaRetrieveQueryResponseType, LocationAreaRetrievePathParamsType } from "../ts/LocationAreaRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type LocationAreaRetrieveClient = typeof client<LocationAreaRetrieveQueryResponseType, Error, never>;
type LocationAreaRetrieve = {
    data: LocationAreaRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: LocationAreaRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: LocationAreaRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<LocationAreaRetrieveClient>[0]>;
        return: Awaited<ReturnType<LocationAreaRetrieveClient>>;
    };
};
export const locationAreaRetrieveQueryKey = (id: LocationAreaRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/location-area/:id/", params: { id: id } }] as const;
export type LocationAreaRetrieveQueryKey = ReturnType<typeof locationAreaRetrieveQueryKey>;
export function locationAreaRetrieveQueryOptions(id: LocationAreaRetrievePathParamsType["id"], options: LocationAreaRetrieve["client"]["parameters"] = {}) {
    const queryKey = locationAreaRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LocationAreaRetrieve["data"], LocationAreaRetrieve["error"]>({
                method: "get",
                url: `/api/v2/location-area/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 * @summary Get location area
 * @link /api/v2/location-area/:id/
 */
export function useLocationAreaRetrieveHook<TData = LocationAreaRetrieve["response"], TQueryData = LocationAreaRetrieve["response"], TQueryKey extends QueryKey = LocationAreaRetrieveQueryKey>(id: LocationAreaRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<LocationAreaRetrieve["response"], LocationAreaRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: LocationAreaRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, LocationAreaRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? locationAreaRetrieveQueryKey(id);
    const query = useQuery({
        ...locationAreaRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, LocationAreaRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const locationAreaRetrieveSuspenseQueryKey = (id: LocationAreaRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/location-area/:id/", params: { id: id } }] as const;
export type LocationAreaRetrieveSuspenseQueryKey = ReturnType<typeof locationAreaRetrieveSuspenseQueryKey>;
export function locationAreaRetrieveSuspenseQueryOptions(id: LocationAreaRetrievePathParamsType["id"], options: LocationAreaRetrieve["client"]["parameters"] = {}) {
    const queryKey = locationAreaRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<LocationAreaRetrieve["data"], LocationAreaRetrieve["error"]>({
                method: "get",
                url: `/api/v2/location-area/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.
 * @summary Get location area
 * @link /api/v2/location-area/:id/
 */
export function useLocationAreaRetrieveHookSuspense<TData = LocationAreaRetrieve["response"], TQueryKey extends QueryKey = LocationAreaRetrieveSuspenseQueryKey>(id: LocationAreaRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<LocationAreaRetrieve["response"], LocationAreaRetrieve["error"], TData, TQueryKey>>;
    client?: LocationAreaRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, LocationAreaRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? locationAreaRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...locationAreaRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, LocationAreaRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}