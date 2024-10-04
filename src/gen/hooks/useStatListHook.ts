import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { StatListQueryResponseType, StatListQueryParamsType } from "../ts/StatListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type StatListClient = typeof client<StatListQueryResponseType, Error, never>;
type StatList = {
    data: StatListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: StatListQueryParamsType;
    headerParams: never;
    response: StatListQueryResponseType;
    client: {
        parameters: Partial<Parameters<StatListClient>[0]>;
        return: Awaited<ReturnType<StatListClient>>;
    };
};
export const statListQueryKey = (params?: StatList["queryParams"]) => ["v5", { url: "/api/v2/stat/" }, ...(params ? [params] : [])] as const;
export type StatListQueryKey = ReturnType<typeof statListQueryKey>;
export function statListQueryOptions(params?: StatList["queryParams"], options: StatList["client"]["parameters"] = {}) {
    const queryKey = statListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<StatList["data"], StatList["error"]>({
                method: "get",
                url: `/api/v2/stat/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
 * @summary List stats
 * @link /api/v2/stat/
 */
export function useStatListHook<TData = StatList["response"], TQueryData = StatList["response"], TQueryKey extends QueryKey = StatListQueryKey>(params?: StatList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<StatList["response"], StatList["error"], TData, TQueryData, TQueryKey>>;
    client?: StatList["client"]["parameters"];
} = {}): UseQueryResult<TData, StatList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? statListQueryKey(params);
    const query = useQuery({
        ...statListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, StatList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const statListSuspenseQueryKey = (params?: StatList["queryParams"]) => ["v5", { url: "/api/v2/stat/" }, ...(params ? [params] : [])] as const;
export type StatListSuspenseQueryKey = ReturnType<typeof statListSuspenseQueryKey>;
export function statListSuspenseQueryOptions(params?: StatList["queryParams"], options: StatList["client"]["parameters"] = {}) {
    const queryKey = statListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<StatList["data"], StatList["error"]>({
                method: "get",
                url: `/api/v2/stat/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.
 * @summary List stats
 * @link /api/v2/stat/
 */
export function useStatListHookSuspense<TData = StatList["response"], TQueryKey extends QueryKey = StatListSuspenseQueryKey>(params?: StatList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<StatList["response"], StatList["error"], TData, TQueryKey>>;
    client?: StatList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, StatList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? statListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...statListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, StatList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}