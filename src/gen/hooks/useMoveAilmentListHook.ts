import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MoveAilmentListQueryResponseType, MoveAilmentListQueryParamsType } from "../ts/MoveAilmentListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MoveAilmentListClient = typeof client<MoveAilmentListQueryResponseType, Error, never>;
type MoveAilmentList = {
    data: MoveAilmentListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: MoveAilmentListQueryParamsType;
    headerParams: never;
    response: MoveAilmentListQueryResponseType;
    client: {
        parameters: Partial<Parameters<MoveAilmentListClient>[0]>;
        return: Awaited<ReturnType<MoveAilmentListClient>>;
    };
};
export const moveAilmentListQueryKey = (params?: MoveAilmentList["queryParams"]) => ["v5", { url: "/api/v2/move-ailment/" }, ...(params ? [params] : [])] as const;
export type MoveAilmentListQueryKey = ReturnType<typeof moveAilmentListQueryKey>;
export function moveAilmentListQueryOptions(params?: MoveAilmentList["queryParams"], options: MoveAilmentList["client"]["parameters"] = {}) {
    const queryKey = moveAilmentListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveAilmentList["data"], MoveAilmentList["error"]>({
                method: "get",
                url: `/api/v2/move-ailment/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
 * @summary List move meta ailments
 * @link /api/v2/move-ailment/
 */
export function useMoveAilmentListHook<TData = MoveAilmentList["response"], TQueryData = MoveAilmentList["response"], TQueryKey extends QueryKey = MoveAilmentListQueryKey>(params?: MoveAilmentList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<MoveAilmentList["response"], MoveAilmentList["error"], TData, TQueryData, TQueryKey>>;
    client?: MoveAilmentList["client"]["parameters"];
} = {}): UseQueryResult<TData, MoveAilmentList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveAilmentListQueryKey(params);
    const query = useQuery({
        ...moveAilmentListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MoveAilmentList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const moveAilmentListSuspenseQueryKey = (params?: MoveAilmentList["queryParams"]) => ["v5", { url: "/api/v2/move-ailment/" }, ...(params ? [params] : [])] as const;
export type MoveAilmentListSuspenseQueryKey = ReturnType<typeof moveAilmentListSuspenseQueryKey>;
export function moveAilmentListSuspenseQueryOptions(params?: MoveAilmentList["queryParams"], options: MoveAilmentList["client"]["parameters"] = {}) {
    const queryKey = moveAilmentListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MoveAilmentList["data"], MoveAilmentList["error"]>({
                method: "get",
                url: `/api/v2/move-ailment/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.
 * @summary List move meta ailments
 * @link /api/v2/move-ailment/
 */
export function useMoveAilmentListHookSuspense<TData = MoveAilmentList["response"], TQueryKey extends QueryKey = MoveAilmentListSuspenseQueryKey>(params?: MoveAilmentList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<MoveAilmentList["response"], MoveAilmentList["error"], TData, TQueryKey>>;
    client?: MoveAilmentList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MoveAilmentList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? moveAilmentListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...moveAilmentListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MoveAilmentList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}