import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { ContestEffectRetrieveQueryResponseType, ContestEffectRetrievePathParamsType } from "../ts/ContestEffectRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type ContestEffectRetrieveClient = typeof client<ContestEffectRetrieveQueryResponseType, Error, never>;
type ContestEffectRetrieve = {
    data: ContestEffectRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: ContestEffectRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: ContestEffectRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<ContestEffectRetrieveClient>[0]>;
        return: Awaited<ReturnType<ContestEffectRetrieveClient>>;
    };
};
export const contestEffectRetrieveQueryKey = (id: ContestEffectRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/contest-effect/:id/", params: { id: id } }] as const;
export type ContestEffectRetrieveQueryKey = ReturnType<typeof contestEffectRetrieveQueryKey>;
export function contestEffectRetrieveQueryOptions(id: ContestEffectRetrievePathParamsType["id"], options: ContestEffectRetrieve["client"]["parameters"] = {}) {
    const queryKey = contestEffectRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContestEffectRetrieve["data"], ContestEffectRetrieve["error"]>({
                method: "get",
                url: `/api/v2/contest-effect/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Contest effects refer to the effects of moves when used in contests.
 * @summary Get contest effect
 * @link /api/v2/contest-effect/:id/
 */
export function useContestEffectRetrieveHook<TData = ContestEffectRetrieve["response"], TQueryData = ContestEffectRetrieve["response"], TQueryKey extends QueryKey = ContestEffectRetrieveQueryKey>(id: ContestEffectRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<ContestEffectRetrieve["response"], ContestEffectRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: ContestEffectRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, ContestEffectRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contestEffectRetrieveQueryKey(id);
    const query = useQuery({
        ...contestEffectRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, ContestEffectRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const contestEffectRetrieveSuspenseQueryKey = (id: ContestEffectRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/contest-effect/:id/", params: { id: id } }] as const;
export type ContestEffectRetrieveSuspenseQueryKey = ReturnType<typeof contestEffectRetrieveSuspenseQueryKey>;
export function contestEffectRetrieveSuspenseQueryOptions(id: ContestEffectRetrievePathParamsType["id"], options: ContestEffectRetrieve["client"]["parameters"] = {}) {
    const queryKey = contestEffectRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<ContestEffectRetrieve["data"], ContestEffectRetrieve["error"]>({
                method: "get",
                url: `/api/v2/contest-effect/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Contest effects refer to the effects of moves when used in contests.
 * @summary Get contest effect
 * @link /api/v2/contest-effect/:id/
 */
export function useContestEffectRetrieveHookSuspense<TData = ContestEffectRetrieve["response"], TQueryKey extends QueryKey = ContestEffectRetrieveSuspenseQueryKey>(id: ContestEffectRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<ContestEffectRetrieve["response"], ContestEffectRetrieve["error"], TData, TQueryKey>>;
    client?: ContestEffectRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, ContestEffectRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? contestEffectRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...contestEffectRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, ContestEffectRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}