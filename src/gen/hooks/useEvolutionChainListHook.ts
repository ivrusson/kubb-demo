import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EvolutionChainListQueryResponseType, EvolutionChainListQueryParamsType } from "../ts/EvolutionChainListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EvolutionChainListClient = typeof client<EvolutionChainListQueryResponseType, Error, never>;
type EvolutionChainList = {
    data: EvolutionChainListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: EvolutionChainListQueryParamsType;
    headerParams: never;
    response: EvolutionChainListQueryResponseType;
    client: {
        parameters: Partial<Parameters<EvolutionChainListClient>[0]>;
        return: Awaited<ReturnType<EvolutionChainListClient>>;
    };
};
export const evolutionChainListQueryKey = (params?: EvolutionChainList["queryParams"]) => ["v5", { url: "/api/v2/evolution-chain/" }, ...(params ? [params] : [])] as const;
export type EvolutionChainListQueryKey = ReturnType<typeof evolutionChainListQueryKey>;
export function evolutionChainListQueryOptions(params?: EvolutionChainList["queryParams"], options: EvolutionChainList["client"]["parameters"] = {}) {
    const queryKey = evolutionChainListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EvolutionChainList["data"], EvolutionChainList["error"]>({
                method: "get",
                url: `/api/v2/evolution-chain/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
 * @summary List evolution chains
 * @link /api/v2/evolution-chain/
 */
export function useEvolutionChainListHook<TData = EvolutionChainList["response"], TQueryData = EvolutionChainList["response"], TQueryKey extends QueryKey = EvolutionChainListQueryKey>(params?: EvolutionChainList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<EvolutionChainList["response"], EvolutionChainList["error"], TData, TQueryData, TQueryKey>>;
    client?: EvolutionChainList["client"]["parameters"];
} = {}): UseQueryResult<TData, EvolutionChainList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? evolutionChainListQueryKey(params);
    const query = useQuery({
        ...evolutionChainListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EvolutionChainList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const evolutionChainListSuspenseQueryKey = (params?: EvolutionChainList["queryParams"]) => ["v5", { url: "/api/v2/evolution-chain/" }, ...(params ? [params] : [])] as const;
export type EvolutionChainListSuspenseQueryKey = ReturnType<typeof evolutionChainListSuspenseQueryKey>;
export function evolutionChainListSuspenseQueryOptions(params?: EvolutionChainList["queryParams"], options: EvolutionChainList["client"]["parameters"] = {}) {
    const queryKey = evolutionChainListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EvolutionChainList["data"], EvolutionChainList["error"]>({
                method: "get",
                url: `/api/v2/evolution-chain/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
 * @summary List evolution chains
 * @link /api/v2/evolution-chain/
 */
export function useEvolutionChainListHookSuspense<TData = EvolutionChainList["response"], TQueryKey extends QueryKey = EvolutionChainListSuspenseQueryKey>(params?: EvolutionChainList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<EvolutionChainList["response"], EvolutionChainList["error"], TData, TQueryKey>>;
    client?: EvolutionChainList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EvolutionChainList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? evolutionChainListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...evolutionChainListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EvolutionChainList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}