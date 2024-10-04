import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { VersionListQueryResponseType, VersionListQueryParamsType } from "../ts/VersionListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type VersionListClient = typeof client<VersionListQueryResponseType, Error, never>;
type VersionList = {
    data: VersionListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: VersionListQueryParamsType;
    headerParams: never;
    response: VersionListQueryResponseType;
    client: {
        parameters: Partial<Parameters<VersionListClient>[0]>;
        return: Awaited<ReturnType<VersionListClient>>;
    };
};
export const versionListQueryKey = (params?: VersionList["queryParams"]) => ["v5", { url: "/api/v2/version/" }, ...(params ? [params] : [])] as const;
export type VersionListQueryKey = ReturnType<typeof versionListQueryKey>;
export function versionListQueryOptions(params?: VersionList["queryParams"], options: VersionList["client"]["parameters"] = {}) {
    const queryKey = versionListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<VersionList["data"], VersionList["error"]>({
                method: "get",
                url: `/api/v2/version/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Versions of the games, e.g., Red, Blue or Yellow.
 * @summary List versions
 * @link /api/v2/version/
 */
export function useVersionListHook<TData = VersionList["response"], TQueryData = VersionList["response"], TQueryKey extends QueryKey = VersionListQueryKey>(params?: VersionList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<VersionList["response"], VersionList["error"], TData, TQueryData, TQueryKey>>;
    client?: VersionList["client"]["parameters"];
} = {}): UseQueryResult<TData, VersionList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? versionListQueryKey(params);
    const query = useQuery({
        ...versionListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, VersionList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const versionListSuspenseQueryKey = (params?: VersionList["queryParams"]) => ["v5", { url: "/api/v2/version/" }, ...(params ? [params] : [])] as const;
export type VersionListSuspenseQueryKey = ReturnType<typeof versionListSuspenseQueryKey>;
export function versionListSuspenseQueryOptions(params?: VersionList["queryParams"], options: VersionList["client"]["parameters"] = {}) {
    const queryKey = versionListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<VersionList["data"], VersionList["error"]>({
                method: "get",
                url: `/api/v2/version/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Versions of the games, e.g., Red, Blue or Yellow.
 * @summary List versions
 * @link /api/v2/version/
 */
export function useVersionListHookSuspense<TData = VersionList["response"], TQueryKey extends QueryKey = VersionListSuspenseQueryKey>(params?: VersionList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<VersionList["response"], VersionList["error"], TData, TQueryKey>>;
    client?: VersionList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, VersionList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? versionListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...versionListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, VersionList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}