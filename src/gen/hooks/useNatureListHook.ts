import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { NatureListQueryResponseType, NatureListQueryParamsType } from "../ts/NatureListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type NatureListClient = typeof client<NatureListQueryResponseType, Error, never>;
type NatureList = {
    data: NatureListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: NatureListQueryParamsType;
    headerParams: never;
    response: NatureListQueryResponseType;
    client: {
        parameters: Partial<Parameters<NatureListClient>[0]>;
        return: Awaited<ReturnType<NatureListClient>>;
    };
};
export const natureListQueryKey = (params?: NatureList["queryParams"]) => ["v5", { url: "/api/v2/nature/" }, ...(params ? [params] : [])] as const;
export type NatureListQueryKey = ReturnType<typeof natureListQueryKey>;
export function natureListQueryOptions(params?: NatureList["queryParams"], options: NatureList["client"]["parameters"] = {}) {
    const queryKey = natureListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NatureList["data"], NatureList["error"]>({
                method: "get",
                url: `/api/v2/nature/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
 * @summary List natures
 * @link /api/v2/nature/
 */
export function useNatureListHook<TData = NatureList["response"], TQueryData = NatureList["response"], TQueryKey extends QueryKey = NatureListQueryKey>(params?: NatureList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<NatureList["response"], NatureList["error"], TData, TQueryData, TQueryKey>>;
    client?: NatureList["client"]["parameters"];
} = {}): UseQueryResult<TData, NatureList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? natureListQueryKey(params);
    const query = useQuery({
        ...natureListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, NatureList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const natureListSuspenseQueryKey = (params?: NatureList["queryParams"]) => ["v5", { url: "/api/v2/nature/" }, ...(params ? [params] : [])] as const;
export type NatureListSuspenseQueryKey = ReturnType<typeof natureListSuspenseQueryKey>;
export function natureListSuspenseQueryOptions(params?: NatureList["queryParams"], options: NatureList["client"]["parameters"] = {}) {
    const queryKey = natureListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<NatureList["data"], NatureList["error"]>({
                method: "get",
                url: `/api/v2/nature/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Natures influence how a Pokémon's stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.
 * @summary List natures
 * @link /api/v2/nature/
 */
export function useNatureListHookSuspense<TData = NatureList["response"], TQueryKey extends QueryKey = NatureListSuspenseQueryKey>(params?: NatureList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<NatureList["response"], NatureList["error"], TData, TQueryKey>>;
    client?: NatureList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, NatureList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? natureListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...natureListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, NatureList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}