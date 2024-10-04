import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { SuperContestEffectListQueryResponseType, SuperContestEffectListQueryParamsType } from "../ts/SuperContestEffectListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type SuperContestEffectListClient = typeof client<SuperContestEffectListQueryResponseType, Error, never>;
type SuperContestEffectList = {
    data: SuperContestEffectListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: SuperContestEffectListQueryParamsType;
    headerParams: never;
    response: SuperContestEffectListQueryResponseType;
    client: {
        parameters: Partial<Parameters<SuperContestEffectListClient>[0]>;
        return: Awaited<ReturnType<SuperContestEffectListClient>>;
    };
};
export const superContestEffectListQueryKey = (params?: SuperContestEffectList["queryParams"]) => ["v5", { url: "/api/v2/super-contest-effect/" }, ...(params ? [params] : [])] as const;
export type SuperContestEffectListQueryKey = ReturnType<typeof superContestEffectListQueryKey>;
export function superContestEffectListQueryOptions(params?: SuperContestEffectList["queryParams"], options: SuperContestEffectList["client"]["parameters"] = {}) {
    const queryKey = superContestEffectListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<SuperContestEffectList["data"], SuperContestEffectList["error"]>({
                method: "get",
                url: `/api/v2/super-contest-effect/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Super contest effects refer to the effects of moves when used in super contests.
 * @summary List super contest effects
 * @link /api/v2/super-contest-effect/
 */
export function useSuperContestEffectListHook<TData = SuperContestEffectList["response"], TQueryData = SuperContestEffectList["response"], TQueryKey extends QueryKey = SuperContestEffectListQueryKey>(params?: SuperContestEffectList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<SuperContestEffectList["response"], SuperContestEffectList["error"], TData, TQueryData, TQueryKey>>;
    client?: SuperContestEffectList["client"]["parameters"];
} = {}): UseQueryResult<TData, SuperContestEffectList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? superContestEffectListQueryKey(params);
    const query = useQuery({
        ...superContestEffectListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, SuperContestEffectList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const superContestEffectListSuspenseQueryKey = (params?: SuperContestEffectList["queryParams"]) => ["v5", { url: "/api/v2/super-contest-effect/" }, ...(params ? [params] : [])] as const;
export type SuperContestEffectListSuspenseQueryKey = ReturnType<typeof superContestEffectListSuspenseQueryKey>;
export function superContestEffectListSuspenseQueryOptions(params?: SuperContestEffectList["queryParams"], options: SuperContestEffectList["client"]["parameters"] = {}) {
    const queryKey = superContestEffectListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<SuperContestEffectList["data"], SuperContestEffectList["error"]>({
                method: "get",
                url: `/api/v2/super-contest-effect/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Super contest effects refer to the effects of moves when used in super contests.
 * @summary List super contest effects
 * @link /api/v2/super-contest-effect/
 */
export function useSuperContestEffectListHookSuspense<TData = SuperContestEffectList["response"], TQueryKey extends QueryKey = SuperContestEffectListSuspenseQueryKey>(params?: SuperContestEffectList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<SuperContestEffectList["response"], SuperContestEffectList["error"], TData, TQueryKey>>;
    client?: SuperContestEffectList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, SuperContestEffectList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? superContestEffectListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...superContestEffectListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, SuperContestEffectList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}