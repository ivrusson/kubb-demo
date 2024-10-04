import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveCategoryRetrieveQueryResponseType, MoveCategoryRetrievePathParamsType } from "../ts/MoveCategoryRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveCategoryRetrieveClient = typeof client<MoveCategoryRetrieveQueryResponseType, Error, never>;
type MoveCategoryRetrieve = {
    data: MoveCategoryRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: MoveCategoryRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: MoveCategoryRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveCategoryRetrieveClient>[0]>;
        return: Awaited<ReturnType<MoveCategoryRetrieveClient>>;
    };
};
export const moveCategoryRetrieveQueryKey = (id: MoveCategoryRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-category/:id/", params: { id: id } }] as const;
export type MoveCategoryRetrieveQueryKey = ReturnType<typeof moveCategoryRetrieveQueryKey>;
export function moveCategoryRetrieveQueryOptions(id: MoveCategoryRetrievePathParamsType["id"], options: MoveCategoryRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveCategoryRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveCategoryRetrieve["data"], MoveCategoryRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-category/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Very general categories that loosely group move effects.
 * @summary Get move meta category
 * @link /api/v2/move-category/:id/
 */
export function useMoveCategoryRetrieveHook<TData = MoveCategoryRetrieve["response"], TQueryData = MoveCategoryRetrieve["response"], TQueryKey extends QueryKey = MoveCategoryRetrieveQueryKey>(id: MoveCategoryRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<MoveCategoryRetrieve["response"], MoveCategoryRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveCategoryRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveCategoryRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveCategoryRetrieveQueryKey(id);
    const query = useQuery({
        ...moveCategoryRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveCategoryRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveCategoryRetrieveSuspenseQueryKey = (id: MoveCategoryRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/move-category/:id/", params: { id: id } }] as const;
export type MoveCategoryRetrieveSuspenseQueryKey = ReturnType<typeof moveCategoryRetrieveSuspenseQueryKey>;
export function moveCategoryRetrieveSuspenseQueryOptions(id: MoveCategoryRetrievePathParamsType["id"], options: MoveCategoryRetrieve["client"]["parameters"] = {}) {
    const queryKey = moveCategoryRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveCategoryRetrieve["data"], MoveCategoryRetrieve["error"]>({
                method: "get",
                url: `/api/v2/move-category/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Very general categories that loosely group move effects.
 * @summary Get move meta category
 * @link /api/v2/move-category/:id/
 */
export function useMoveCategoryRetrieveHookSuspense<TData = MoveCategoryRetrieve["response"], TQueryKey extends QueryKey = MoveCategoryRetrieveSuspenseQueryKey>(id: MoveCategoryRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveCategoryRetrieve["response"], MoveCategoryRetrieve["error"], TData, TQueryKey>>;
    client?: MoveCategoryRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveCategoryRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveCategoryRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...moveCategoryRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveCategoryRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}