import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { VersionRetrieveQueryResponseType, VersionRetrievePathParamsType } from "../ts/VersionRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type VersionRetrieveClient = typeof client<VersionRetrieveQueryResponseType, Error, never>;
type VersionRetrieve = {
    data: VersionRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: VersionRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: VersionRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<VersionRetrieveClient>[0]>;
        return: Awaited<ReturnType<VersionRetrieveClient>>;
    };
};
export const versionRetrieveQueryKey = (id: VersionRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/version/:id/", params: { id: id } }] as const;
export type VersionRetrieveQueryKey = ReturnType<typeof versionRetrieveQueryKey>;
export function versionRetrieveQueryOptions(id: VersionRetrievePathParamsType["id"], options: VersionRetrieve["client"]["parameters"] = {}) {
    const queryKey = versionRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<VersionRetrieve["data"], VersionRetrieve["error"]>({
                method: "get",
                url: `/api/v2/version/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Versions of the games, e.g., Red, Blue or Yellow.
 * @summary Get version
 * @link /api/v2/version/:id/
 */
export function useVersionRetrieveHook<TData = VersionRetrieve["response"], TQueryData = VersionRetrieve["response"], TQueryKey extends QueryKey = VersionRetrieveQueryKey>(id: VersionRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<VersionRetrieve["response"], VersionRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: VersionRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, VersionRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? versionRetrieveQueryKey(id);
    const query = useQuery({
        ...versionRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, VersionRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const versionRetrieveSuspenseQueryKey = (id: VersionRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/version/:id/", params: { id: id } }] as const;
export type VersionRetrieveSuspenseQueryKey = ReturnType<typeof versionRetrieveSuspenseQueryKey>;
export function versionRetrieveSuspenseQueryOptions(id: VersionRetrievePathParamsType["id"], options: VersionRetrieve["client"]["parameters"] = {}) {
    const queryKey = versionRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<VersionRetrieve["data"], VersionRetrieve["error"]>({
                method: "get",
                url: `/api/v2/version/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Versions of the games, e.g., Red, Blue or Yellow.
 * @summary Get version
 * @link /api/v2/version/:id/
 */
export function useVersionRetrieveHookSuspense<TData = VersionRetrieve["response"], TQueryKey extends QueryKey = VersionRetrieveSuspenseQueryKey>(id: VersionRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<VersionRetrieve["response"], VersionRetrieve["error"], TData, TQueryKey>>;
    client?: VersionRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, VersionRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? versionRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...versionRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, VersionRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}