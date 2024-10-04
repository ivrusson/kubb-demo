import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveCategoryListQueryResponseType, MoveCategoryListQueryParamsType } from "../ts/MoveCategoryListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveCategoryListClient = typeof client<MoveCategoryListQueryResponseType, Error, never>;
type MoveCategoryList = {
    data: MoveCategoryListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MoveCategoryListQueryParamsType;
    headerParams: never;
    response: MoveCategoryListQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveCategoryListClient>[0]>;
        return: Awaited<ReturnType<MoveCategoryListClient>>;
    };
};
export const moveCategoryListQueryKey = (params?: MoveCategoryList["queryParams"]) => ["v5", { url: "/api/v2/move-category/" }, ...(params ? [params] : [])] as const;
export type MoveCategoryListQueryKey = ReturnType<typeof moveCategoryListQueryKey>;
export function moveCategoryListQueryOptions(params?: MoveCategoryList["queryParams"], options: MoveCategoryList["client"]["parameters"] = {}) {
    const queryKey = moveCategoryListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveCategoryList["data"], MoveCategoryList["error"]>({
                method: "get",
                url: `/api/v2/move-category/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Very general categories that loosely group move effects.
 * @summary List move meta categories
 * @link /api/v2/move-category/
 */
export function useMoveCategoryListHook<TData = MoveCategoryList["response"], TQueryData = MoveCategoryList["response"], TQueryKey extends QueryKey = MoveCategoryListQueryKey>(params?: MoveCategoryList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<MoveCategoryList["response"], MoveCategoryList["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveCategoryList["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveCategoryList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveCategoryListQueryKey(params);
    const query = useQuery({
        ...moveCategoryListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveCategoryList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveCategoryListSuspenseQueryKey = (params?: MoveCategoryList["queryParams"]) => ["v5", { url: "/api/v2/move-category/" }, ...(params ? [params] : [])] as const;
export type MoveCategoryListSuspenseQueryKey = ReturnType<typeof moveCategoryListSuspenseQueryKey>;
export function moveCategoryListSuspenseQueryOptions(params?: MoveCategoryList["queryParams"], options: MoveCategoryList["client"]["parameters"] = {}) {
    const queryKey = moveCategoryListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveCategoryList["data"], MoveCategoryList["error"]>({
                method: "get",
                url: `/api/v2/move-category/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Very general categories that loosely group move effects.
 * @summary List move meta categories
 * @link /api/v2/move-category/
 */
export function useMoveCategoryListHookSuspense<TData = MoveCategoryList["response"], TQueryKey extends QueryKey = MoveCategoryListSuspenseQueryKey>(params?: MoveCategoryList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveCategoryList["response"], MoveCategoryList["error"], TData, TQueryKey>>;
    client?: MoveCategoryList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveCategoryList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveCategoryListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...moveCategoryListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveCategoryList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}