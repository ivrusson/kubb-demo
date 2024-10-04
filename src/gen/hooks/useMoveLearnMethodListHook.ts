import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveLearnMethodListQueryResponseType, MoveLearnMethodListQueryParamsType } from "../ts/MoveLearnMethodListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveLearnMethodListClient = typeof client<MoveLearnMethodListQueryResponseType, Error, never>;
type MoveLearnMethodList = {
    data: MoveLearnMethodListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MoveLearnMethodListQueryParamsType;
    headerParams: never;
    response: MoveLearnMethodListQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveLearnMethodListClient>[0]>;
        return: Awaited<ReturnType<MoveLearnMethodListClient>>;
    };
};
export const moveLearnMethodListQueryKey = (params?: MoveLearnMethodList["queryParams"]) => ["v5", { url: "/api/v2/move-learn-method/" }, ...(params ? [params] : [])] as const;
export type MoveLearnMethodListQueryKey = ReturnType<typeof moveLearnMethodListQueryKey>;
export function moveLearnMethodListQueryOptions(params?: MoveLearnMethodList["queryParams"], options: MoveLearnMethodList["client"]["parameters"] = {}) {
    const queryKey = moveLearnMethodListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveLearnMethodList["data"], MoveLearnMethodList["error"]>({
                method: "get",
                url: `/api/v2/move-learn-method/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Methods by which Pokémon can learn moves.
 * @summary List move learn methods
 * @link /api/v2/move-learn-method/
 */
export function useMoveLearnMethodListHook<TData = MoveLearnMethodList["response"], TQueryData = MoveLearnMethodList["response"], TQueryKey extends QueryKey = MoveLearnMethodListQueryKey>(params?: MoveLearnMethodList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<MoveLearnMethodList["response"], MoveLearnMethodList["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveLearnMethodList["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveLearnMethodList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveLearnMethodListQueryKey(params);
    const query = useQuery({
        ...moveLearnMethodListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveLearnMethodList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveLearnMethodListSuspenseQueryKey = (params?: MoveLearnMethodList["queryParams"]) => ["v5", { url: "/api/v2/move-learn-method/" }, ...(params ? [params] : [])] as const;
export type MoveLearnMethodListSuspenseQueryKey = ReturnType<typeof moveLearnMethodListSuspenseQueryKey>;
export function moveLearnMethodListSuspenseQueryOptions(params?: MoveLearnMethodList["queryParams"], options: MoveLearnMethodList["client"]["parameters"] = {}) {
    const queryKey = moveLearnMethodListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveLearnMethodList["data"], MoveLearnMethodList["error"]>({
                method: "get",
                url: `/api/v2/move-learn-method/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Methods by which Pokémon can learn moves.
 * @summary List move learn methods
 * @link /api/v2/move-learn-method/
 */
export function useMoveLearnMethodListHookSuspense<TData = MoveLearnMethodList["response"], TQueryKey extends QueryKey = MoveLearnMethodListSuspenseQueryKey>(params?: MoveLearnMethodList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveLearnMethodList["response"], MoveLearnMethodList["error"], TData, TQueryKey>>;
    client?: MoveLearnMethodList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveLearnMethodList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveLearnMethodListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...moveLearnMethodListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveLearnMethodList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}