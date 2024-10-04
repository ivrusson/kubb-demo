import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveDamageClassListQueryResponseType, MoveDamageClassListQueryParamsType } from "../ts/MoveDamageClassListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveDamageClassListClient = typeof client<MoveDamageClassListQueryResponseType, Error, never>;
type MoveDamageClassList = {
    data: MoveDamageClassListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MoveDamageClassListQueryParamsType;
    headerParams: never;
    response: MoveDamageClassListQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveDamageClassListClient>[0]>;
        return: Awaited<ReturnType<MoveDamageClassListClient>>;
    };
};
export const moveDamageClassListQueryKey = (params?: MoveDamageClassList["queryParams"]) => ["v5", { url: "/api/v2/move-damage-class/" }, ...(params ? [params] : [])] as const;
export type MoveDamageClassListQueryKey = ReturnType<typeof moveDamageClassListQueryKey>;
export function moveDamageClassListQueryOptions(params?: MoveDamageClassList["queryParams"], options: MoveDamageClassList["client"]["parameters"] = {}) {
    const queryKey = moveDamageClassListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveDamageClassList["data"], MoveDamageClassList["error"]>({
                method: "get",
                url: `/api/v2/move-damage-class/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Damage classes moves can have, e.g. physical, special, or non-damaging.
 * @summary List move damage classes
 * @link /api/v2/move-damage-class/
 */
export function useMoveDamageClassListHook<TData = MoveDamageClassList["response"], TQueryData = MoveDamageClassList["response"], TQueryKey extends QueryKey = MoveDamageClassListQueryKey>(params?: MoveDamageClassList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<MoveDamageClassList["response"], MoveDamageClassList["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveDamageClassList["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveDamageClassList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveDamageClassListQueryKey(params);
    const query = useQuery({
        ...moveDamageClassListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveDamageClassList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveDamageClassListSuspenseQueryKey = (params?: MoveDamageClassList["queryParams"]) => ["v5", { url: "/api/v2/move-damage-class/" }, ...(params ? [params] : [])] as const;
export type MoveDamageClassListSuspenseQueryKey = ReturnType<typeof moveDamageClassListSuspenseQueryKey>;
export function moveDamageClassListSuspenseQueryOptions(params?: MoveDamageClassList["queryParams"], options: MoveDamageClassList["client"]["parameters"] = {}) {
    const queryKey = moveDamageClassListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveDamageClassList["data"], MoveDamageClassList["error"]>({
                method: "get",
                url: `/api/v2/move-damage-class/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Damage classes moves can have, e.g. physical, special, or non-damaging.
 * @summary List move damage classes
 * @link /api/v2/move-damage-class/
 */
export function useMoveDamageClassListHookSuspense<TData = MoveDamageClassList["response"], TQueryKey extends QueryKey = MoveDamageClassListSuspenseQueryKey>(params?: MoveDamageClassList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveDamageClassList["response"], MoveDamageClassList["error"], TData, TQueryKey>>;
    client?: MoveDamageClassList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveDamageClassList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveDamageClassListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...moveDamageClassListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveDamageClassList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}