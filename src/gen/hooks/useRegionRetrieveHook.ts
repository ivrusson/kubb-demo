import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { RegionRetrieveQueryResponseType, RegionRetrievePathParamsType } from "../ts/RegionRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type RegionRetrieveClient = typeof client<RegionRetrieveQueryResponseType, Error, never>;
type RegionRetrieve = {
    data: RegionRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: RegionRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: RegionRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<RegionRetrieveClient>[0]>;
        return: Awaited<ReturnType<RegionRetrieveClient>>;
    };
};
export const regionRetrieveQueryKey = (id: RegionRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/region/:id/", params: { id: id } }] as const;
export type RegionRetrieveQueryKey = ReturnType<typeof regionRetrieveQueryKey>;
export function regionRetrieveQueryOptions(id: RegionRetrievePathParamsType["id"], options: RegionRetrieve["client"]["parameters"] = {}) {
    const queryKey = regionRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<RegionRetrieve["data"], RegionRetrieve["error"]>({
                method: "get",
                url: `/api/v2/region/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
 * @summary Get region
 * @link /api/v2/region/:id/
 */
export function useRegionRetrieveHook<TData = RegionRetrieve["response"], TQueryData = RegionRetrieve["response"], TQueryKey extends QueryKey = RegionRetrieveQueryKey>(id: RegionRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<RegionRetrieve["response"], RegionRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: RegionRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, RegionRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? regionRetrieveQueryKey(id);
    const query = useQuery({
        ...regionRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, RegionRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const regionRetrieveSuspenseQueryKey = (id: RegionRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/region/:id/", params: { id: id } }] as const;
export type RegionRetrieveSuspenseQueryKey = ReturnType<typeof regionRetrieveSuspenseQueryKey>;
export function regionRetrieveSuspenseQueryOptions(id: RegionRetrievePathParamsType["id"], options: RegionRetrieve["client"]["parameters"] = {}) {
    const queryKey = regionRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<RegionRetrieve["data"], RegionRetrieve["error"]>({
                method: "get",
                url: `/api/v2/region/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.
 * @summary Get region
 * @link /api/v2/region/:id/
 */
export function useRegionRetrieveHookSuspense<TData = RegionRetrieve["response"], TQueryKey extends QueryKey = RegionRetrieveSuspenseQueryKey>(id: RegionRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<RegionRetrieve["response"], RegionRetrieve["error"], TData, TQueryKey>>;
    client?: RegionRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, RegionRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? regionRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...regionRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, RegionRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}