import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { VersionGroupListQueryResponseType, VersionGroupListQueryParamsType } from "../ts/VersionGroupListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type VersionGroupListClient = typeof client<VersionGroupListQueryResponseType, Error, never>;
type VersionGroupList = {
    data: VersionGroupListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: VersionGroupListQueryParamsType;
    headerParams: never;
    response: VersionGroupListQueryResponseType;
    client: {
        parameters: Partial<Parameters<VersionGroupListClient>[0]>;
        return: Awaited<ReturnType<VersionGroupListClient>>;
    };
};
export const versionGroupListQueryKey = (params?: VersionGroupList["queryParams"]) => ["v5", { url: "/api/v2/version-group/" }, ...(params ? [params] : [])] as const;
export type VersionGroupListQueryKey = ReturnType<typeof versionGroupListQueryKey>;
export function versionGroupListQueryOptions(params?: VersionGroupList["queryParams"], options: VersionGroupList["client"]["parameters"] = {}) {
    const queryKey = versionGroupListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<VersionGroupList["data"], VersionGroupList["error"]>({
                method: "get",
                url: `/api/v2/version-group/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Version groups categorize highly similar versions of the games.
 * @summary List version groups
 * @link /api/v2/version-group/
 */
export function useVersionGroupListHook<TData = VersionGroupList["response"], TQueryData = VersionGroupList["response"], TQueryKey extends QueryKey = VersionGroupListQueryKey>(params?: VersionGroupList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<VersionGroupList["response"], VersionGroupList["error"], TData, TQueryData, TQueryKey>>;
    client?: VersionGroupList["client"]["parameters"];
} = {}): UseQueryResult<TData, VersionGroupList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? versionGroupListQueryKey(params);
    const query = useQuery({
        ...versionGroupListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, VersionGroupList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const versionGroupListSuspenseQueryKey = (params?: VersionGroupList["queryParams"]) => ["v5", { url: "/api/v2/version-group/" }, ...(params ? [params] : [])] as const;
export type VersionGroupListSuspenseQueryKey = ReturnType<typeof versionGroupListSuspenseQueryKey>;
export function versionGroupListSuspenseQueryOptions(params?: VersionGroupList["queryParams"], options: VersionGroupList["client"]["parameters"] = {}) {
    const queryKey = versionGroupListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<VersionGroupList["data"], VersionGroupList["error"]>({
                method: "get",
                url: `/api/v2/version-group/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Version groups categorize highly similar versions of the games.
 * @summary List version groups
 * @link /api/v2/version-group/
 */
export function useVersionGroupListHookSuspense<TData = VersionGroupList["response"], TQueryKey extends QueryKey = VersionGroupListSuspenseQueryKey>(params?: VersionGroupList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<VersionGroupList["response"], VersionGroupList["error"], TData, TQueryKey>>;
    client?: VersionGroupList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, VersionGroupList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? versionGroupListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...versionGroupListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, VersionGroupList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}