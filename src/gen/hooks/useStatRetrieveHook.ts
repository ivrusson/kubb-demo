import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { StatRetrieveQueryResponseType, StatRetrievePathParamsType } from "../ts/StatRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type StatRetrieveClient = typeof client<StatRetrieveQueryResponseType, Error, never>;
type StatRetrieve = {
    data: StatRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: StatRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: StatRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<StatRetrieveClient>[0]>;
        return: Awaited<ReturnType<StatRetrieveClient>>;
    };
};
export const statRetrieveQueryKey = (id: StatRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/stat/:id/", params: { id: id } }] as const;
export type StatRetrieveQueryKey = ReturnType<typeof statRetrieveQueryKey>;
export function statRetrieveQueryOptions(id: StatRetrievePathParamsType["id"], options: StatRetrieve["client"]["parameters"] = {}) {
    const queryKey = statRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<StatRetrieve["data"], StatRetrieve["error"]>({
                method: "get",
                url: `/api/v2/stat/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
 * @summary Get stat
 * @link /api/v2/stat/:id/
 */
export function useStatRetrieveHook<TData = StatRetrieve["response"], TQueryData = StatRetrieve["response"], TQueryKey extends QueryKey = StatRetrieveQueryKey>(id: StatRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<StatRetrieve["response"], StatRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: StatRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, StatRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? statRetrieveQueryKey(id);
    const query = useQuery({
        ...statRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, StatRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const statRetrieveSuspenseQueryKey = (id: StatRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/stat/:id/", params: { id: id } }] as const;
export type StatRetrieveSuspenseQueryKey = ReturnType<typeof statRetrieveSuspenseQueryKey>;
export function statRetrieveSuspenseQueryOptions(id: StatRetrievePathParamsType["id"], options: StatRetrieve["client"]["parameters"] = {}) {
    const queryKey = statRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<StatRetrieve["data"], StatRetrieve["error"]>({
                method: "get",
                url: `/api/v2/stat/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
 * @summary Get stat
 * @link /api/v2/stat/:id/
 */
export function useStatRetrieveHookSuspense<TData = StatRetrieve["response"], TQueryKey extends QueryKey = StatRetrieveSuspenseQueryKey>(id: StatRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<StatRetrieve["response"], StatRetrieve["error"], TData, TQueryKey>>;
    client?: StatRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, StatRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? statRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...statRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, StatRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}