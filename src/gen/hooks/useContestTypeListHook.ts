import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ContestTypeListQueryResponseType, ContestTypeListQueryParamsType } from "../ts/ContestTypeListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ContestTypeListClient = typeof client<ContestTypeListQueryResponseType, Error, never>;
type ContestTypeList = {
    data: ContestTypeListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: ContestTypeListQueryParamsType;
    headerParams: never;
    response: ContestTypeListQueryResponseType;
    client: {
        parameters: Partial<Parameters<ContestTypeListClient>[0]>;
        return: Awaited<ReturnType<ContestTypeListClient>>;
    };
};
export const contestTypeListQueryKey = (params?: ContestTypeList["queryParams"]) => ["v5", { url: "/api/v2/contest-type/" }, ...(params ? [params] : [])] as const;
export type ContestTypeListQueryKey = ReturnType<typeof contestTypeListQueryKey>;
export function contestTypeListQueryOptions(params?: ContestTypeList["queryParams"], options: ContestTypeList["client"]["parameters"] = {}) {
    const queryKey = contestTypeListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContestTypeList["data"], ContestTypeList["error"]>({
                method: "get",
                url: `/api/v2/contest-type/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
 * @summary List contest types
 * @link /api/v2/contest-type/
 */
export function useContestTypeListHook<TData = ContestTypeList["response"], TQueryData = ContestTypeList["response"], TQueryKey extends QueryKey = ContestTypeListQueryKey>(params?: ContestTypeList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<ContestTypeList["response"], ContestTypeList["error"], TData, TQueryData, TQueryKey>>;
    client?: ContestTypeList["client"]["parameters"];
} = {}): UseQueryResult<TData, ContestTypeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contestTypeListQueryKey(params);
    const query = useQuery({
        ...contestTypeListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ContestTypeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const contestTypeListSuspenseQueryKey = (params?: ContestTypeList["queryParams"]) => ["v5", { url: "/api/v2/contest-type/" }, ...(params ? [params] : [])] as const;
export type ContestTypeListSuspenseQueryKey = ReturnType<typeof contestTypeListSuspenseQueryKey>;
export function contestTypeListSuspenseQueryOptions(params?: ContestTypeList["queryParams"], options: ContestTypeList["client"]["parameters"] = {}) {
    const queryKey = contestTypeListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContestTypeList["data"], ContestTypeList["error"]>({
                method: "get",
                url: `/api/v2/contest-type/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Contest types are categories judges used to weigh a Pokémon's condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.
 * @summary List contest types
 * @link /api/v2/contest-type/
 */
export function useContestTypeListHookSuspense<TData = ContestTypeList["response"], TQueryKey extends QueryKey = ContestTypeListSuspenseQueryKey>(params?: ContestTypeList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<ContestTypeList["response"], ContestTypeList["error"], TData, TQueryKey>>;
    client?: ContestTypeList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ContestTypeList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contestTypeListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...contestTypeListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ContestTypeList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}