import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { VersionGroupRetrieveQueryResponseType, VersionGroupRetrievePathParamsType } from "../ts/VersionGroupRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type VersionGroupRetrieveClient = typeof client<VersionGroupRetrieveQueryResponseType, Error, never>;
type VersionGroupRetrieve = {
    data: VersionGroupRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: VersionGroupRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: VersionGroupRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<VersionGroupRetrieveClient>[0]>;
        return: Awaited<ReturnType<VersionGroupRetrieveClient>>;
    };
};
export const versionGroupRetrieveQueryKey = (id: VersionGroupRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/version-group/:id/", params: { id: id } }] as const;
export type VersionGroupRetrieveQueryKey = ReturnType<typeof versionGroupRetrieveQueryKey>;
export function versionGroupRetrieveQueryOptions(id: VersionGroupRetrievePathParamsType["id"], options: VersionGroupRetrieve["client"]["parameters"] = {}) {
    const queryKey = versionGroupRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<VersionGroupRetrieve["data"], VersionGroupRetrieve["error"]>({
                method: "get",
                url: `/api/v2/version-group/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Version groups categorize highly similar versions of the games.
 * @summary Get version group
 * @link /api/v2/version-group/:id/
 */
export function useVersionGroupRetrieveHook<TData = VersionGroupRetrieve["response"], TQueryData = VersionGroupRetrieve["response"], TQueryKey extends QueryKey = VersionGroupRetrieveQueryKey>(id: VersionGroupRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<VersionGroupRetrieve["response"], VersionGroupRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: VersionGroupRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, VersionGroupRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? versionGroupRetrieveQueryKey(id);
    const query = useQuery({
        ...versionGroupRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, VersionGroupRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const versionGroupRetrieveSuspenseQueryKey = (id: VersionGroupRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/version-group/:id/", params: { id: id } }] as const;
export type VersionGroupRetrieveSuspenseQueryKey = ReturnType<typeof versionGroupRetrieveSuspenseQueryKey>;
export function versionGroupRetrieveSuspenseQueryOptions(id: VersionGroupRetrievePathParamsType["id"], options: VersionGroupRetrieve["client"]["parameters"] = {}) {
    const queryKey = versionGroupRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<VersionGroupRetrieve["data"], VersionGroupRetrieve["error"]>({
                method: "get",
                url: `/api/v2/version-group/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Version groups categorize highly similar versions of the games.
 * @summary Get version group
 * @link /api/v2/version-group/:id/
 */
export function useVersionGroupRetrieveHookSuspense<TData = VersionGroupRetrieve["response"], TQueryKey extends QueryKey = VersionGroupRetrieveSuspenseQueryKey>(id: VersionGroupRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<VersionGroupRetrieve["response"], VersionGroupRetrieve["error"], TData, TQueryKey>>;
    client?: VersionGroupRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, VersionGroupRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? versionGroupRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...versionGroupRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, VersionGroupRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}