import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveTargetListQueryResponseType, MoveTargetListQueryParamsType } from "../ts/MoveTargetListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveTargetListClient = typeof client<MoveTargetListQueryResponseType, Error, never>;
type MoveTargetList = {
    data: MoveTargetListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MoveTargetListQueryParamsType;
    headerParams: never;
    response: MoveTargetListQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveTargetListClient>[0]>;
        return: Awaited<ReturnType<MoveTargetListClient>>;
    };
};
export const moveTargetListQueryKey = (params?: MoveTargetList["queryParams"]) => ["v5", { url: "/api/v2/move-target/" }, ...(params ? [params] : [])] as const;
export type MoveTargetListQueryKey = ReturnType<typeof moveTargetListQueryKey>;
export function moveTargetListQueryOptions(params?: MoveTargetList["queryParams"], options: MoveTargetList["client"]["parameters"] = {}) {
    const queryKey = moveTargetListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveTargetList["data"], MoveTargetList["error"]>({
                method: "get",
                url: `/api/v2/move-target/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 * @summary List move targets
 * @link /api/v2/move-target/
 */
export function useMoveTargetListHook<TData = MoveTargetList["response"], TQueryData = MoveTargetList["response"], TQueryKey extends QueryKey = MoveTargetListQueryKey>(params?: MoveTargetList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<MoveTargetList["response"], MoveTargetList["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveTargetList["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveTargetList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveTargetListQueryKey(params);
    const query = useQuery({
        ...moveTargetListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveTargetList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveTargetListSuspenseQueryKey = (params?: MoveTargetList["queryParams"]) => ["v5", { url: "/api/v2/move-target/" }, ...(params ? [params] : [])] as const;
export type MoveTargetListSuspenseQueryKey = ReturnType<typeof moveTargetListSuspenseQueryKey>;
export function moveTargetListSuspenseQueryOptions(params?: MoveTargetList["queryParams"], options: MoveTargetList["client"]["parameters"] = {}) {
    const queryKey = moveTargetListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveTargetList["data"], MoveTargetList["error"]>({
                method: "get",
                url: `/api/v2/move-target/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
 * @summary List move targets
 * @link /api/v2/move-target/
 */
export function useMoveTargetListHookSuspense<TData = MoveTargetList["response"], TQueryKey extends QueryKey = MoveTargetListSuspenseQueryKey>(params?: MoveTargetList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveTargetList["response"], MoveTargetList["error"], TData, TQueryKey>>;
    client?: MoveTargetList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveTargetList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveTargetListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...moveTargetListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveTargetList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}