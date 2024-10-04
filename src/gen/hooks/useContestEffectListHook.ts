import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ContestEffectListQueryResponseType, ContestEffectListQueryParamsType } from "../ts/ContestEffectListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ContestEffectListClient = typeof client<ContestEffectListQueryResponseType, Error, never>;
type ContestEffectList = {
    data: ContestEffectListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ContestEffectListQueryParamsType;
    headerParams: never;
    response: ContestEffectListQueryResponseType;
    client: {
        parameters: Partial<Parameters<ContestEffectListClient>[0]>;
        return: Awaited<ReturnType<ContestEffectListClient>>;
    };
};
export const contestEffectListQueryKey = (params?: ContestEffectList["queryParams"]) => ["v5", { url: "/api/v2/contest-effect/" }, ...(params ? [params] : [])] as const;
export type ContestEffectListQueryKey = ReturnType<typeof contestEffectListQueryKey>;
export function contestEffectListQueryOptions(params?: ContestEffectList["queryParams"], options: ContestEffectList["client"]["parameters"] = {}) {
    const queryKey = contestEffectListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContestEffectList["data"], ContestEffectList["error"]>({
                method: "get",
                url: `/api/v2/contest-effect/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Contest effects refer to the effects of moves when used in contests.
 * @summary List contest effects
 * @link /api/v2/contest-effect/
 */
export function useContestEffectListHook<TData = ContestEffectList["response"], TQueryData = ContestEffectList["response"], TQueryKey extends QueryKey = ContestEffectListQueryKey>(params?: ContestEffectList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ContestEffectList["response"], ContestEffectList["error"], TData, TQueryData, TQueryKey>>;
    client?: ContestEffectList["client"]["parameters"];
} = {}): UseQueryResult<TData, ContestEffectList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contestEffectListQueryKey(params);
    const query = useQuery({
        ...contestEffectListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ContestEffectList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const contestEffectListSuspenseQueryKey = (params?: ContestEffectList["queryParams"]) => ["v5", { url: "/api/v2/contest-effect/" }, ...(params ? [params] : [])] as const;
export type ContestEffectListSuspenseQueryKey = ReturnType<typeof contestEffectListSuspenseQueryKey>;
export function contestEffectListSuspenseQueryOptions(params?: ContestEffectList["queryParams"], options: ContestEffectList["client"]["parameters"] = {}) {
    const queryKey = contestEffectListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContestEffectList["data"], ContestEffectList["error"]>({
                method: "get",
                url: `/api/v2/contest-effect/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Contest effects refer to the effects of moves when used in contests.
 * @summary List contest effects
 * @link /api/v2/contest-effect/
 */
export function useContestEffectListHookSuspense<TData = ContestEffectList["response"], TQueryKey extends QueryKey = ContestEffectListSuspenseQueryKey>(params?: ContestEffectList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ContestEffectList["response"], ContestEffectList["error"], TData, TQueryKey>>;
    client?: ContestEffectList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ContestEffectList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contestEffectListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...contestEffectListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ContestEffectList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}