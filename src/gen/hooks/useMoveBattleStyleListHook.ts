import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveBattleStyleListQueryResponseType, MoveBattleStyleListQueryParamsType } from "../ts/MoveBattleStyleListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveBattleStyleListClient = typeof client<MoveBattleStyleListQueryResponseType, Error, never>;
type MoveBattleStyleList = {
    data: MoveBattleStyleListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MoveBattleStyleListQueryParamsType;
    headerParams: never;
    response: MoveBattleStyleListQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveBattleStyleListClient>[0]>;
        return: Awaited<ReturnType<MoveBattleStyleListClient>>;
    };
};
export const moveBattleStyleListQueryKey = (params?: MoveBattleStyleList["queryParams"]) => ["v5", { url: "/api/v2/move-battle-style/" }, ...(params ? [params] : [])] as const;
export type MoveBattleStyleListQueryKey = ReturnType<typeof moveBattleStyleListQueryKey>;
export function moveBattleStyleListQueryOptions(params?: MoveBattleStyleList["queryParams"], options: MoveBattleStyleList["client"]["parameters"] = {}) {
    const queryKey = moveBattleStyleListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveBattleStyleList["data"], MoveBattleStyleList["error"]>({
                method: "get",
                url: `/api/v2/move-battle-style/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
 * @summary List move battle styles
 * @link /api/v2/move-battle-style/
 */
export function useMoveBattleStyleListHook<TData = MoveBattleStyleList["response"], TQueryData = MoveBattleStyleList["response"], TQueryKey extends QueryKey = MoveBattleStyleListQueryKey>(params?: MoveBattleStyleList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<MoveBattleStyleList["response"], MoveBattleStyleList["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveBattleStyleList["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveBattleStyleList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveBattleStyleListQueryKey(params);
    const query = useQuery({
        ...moveBattleStyleListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveBattleStyleList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveBattleStyleListSuspenseQueryKey = (params?: MoveBattleStyleList["queryParams"]) => ["v5", { url: "/api/v2/move-battle-style/" }, ...(params ? [params] : [])] as const;
export type MoveBattleStyleListSuspenseQueryKey = ReturnType<typeof moveBattleStyleListSuspenseQueryKey>;
export function moveBattleStyleListSuspenseQueryOptions(params?: MoveBattleStyleList["queryParams"], options: MoveBattleStyleList["client"]["parameters"] = {}) {
    const queryKey = moveBattleStyleListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveBattleStyleList["data"], MoveBattleStyleList["error"]>({
                method: "get",
                url: `/api/v2/move-battle-style/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.
 * @summary List move battle styles
 * @link /api/v2/move-battle-style/
 */
export function useMoveBattleStyleListHookSuspense<TData = MoveBattleStyleList["response"], TQueryKey extends QueryKey = MoveBattleStyleListSuspenseQueryKey>(params?: MoveBattleStyleList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveBattleStyleList["response"], MoveBattleStyleList["error"], TData, TQueryKey>>;
    client?: MoveBattleStyleList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveBattleStyleList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveBattleStyleListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...moveBattleStyleListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveBattleStyleList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}