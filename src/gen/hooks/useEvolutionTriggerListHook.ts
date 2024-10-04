import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EvolutionTriggerListQueryResponseType, EvolutionTriggerListQueryParamsType } from "../ts/EvolutionTriggerListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EvolutionTriggerListClient = typeof client<EvolutionTriggerListQueryResponseType, Error, never>;
type EvolutionTriggerList = {
    data: EvolutionTriggerListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: EvolutionTriggerListQueryParamsType;
    headerParams: never;
    response: EvolutionTriggerListQueryResponseType;
    client: {
        parameters: Partial<Parameters<EvolutionTriggerListClient>[0]>;
        return: Awaited<ReturnType<EvolutionTriggerListClient>>;
    };
};
export const evolutionTriggerListQueryKey = (params?: EvolutionTriggerList["queryParams"]) => ["v5", { url: "/api/v2/evolution-trigger/" }, ...(params ? [params] : [])] as const;
export type EvolutionTriggerListQueryKey = ReturnType<typeof evolutionTriggerListQueryKey>;
export function evolutionTriggerListQueryOptions(params?: EvolutionTriggerList["queryParams"], options: EvolutionTriggerList["client"]["parameters"] = {}) {
    const queryKey = evolutionTriggerListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EvolutionTriggerList["data"], EvolutionTriggerList["error"]>({
                method: "get",
                url: `/api/v2/evolution-trigger/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 * @summary List evolution triggers
 * @link /api/v2/evolution-trigger/
 */
export function useEvolutionTriggerListHook<TData = EvolutionTriggerList["response"], TQueryData = EvolutionTriggerList["response"], TQueryKey extends QueryKey = EvolutionTriggerListQueryKey>(params?: EvolutionTriggerList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<EvolutionTriggerList["response"], EvolutionTriggerList["error"], TData, TQueryData, TQueryKey>>;
    client?: EvolutionTriggerList["client"]["parameters"];
} = {}): UseQueryResult<TData, EvolutionTriggerList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? evolutionTriggerListQueryKey(params);
    const query = useQuery({
        ...evolutionTriggerListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EvolutionTriggerList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const evolutionTriggerListSuspenseQueryKey = (params?: EvolutionTriggerList["queryParams"]) => ["v5", { url: "/api/v2/evolution-trigger/" }, ...(params ? [params] : [])] as const;
export type EvolutionTriggerListSuspenseQueryKey = ReturnType<typeof evolutionTriggerListSuspenseQueryKey>;
export function evolutionTriggerListSuspenseQueryOptions(params?: EvolutionTriggerList["queryParams"], options: EvolutionTriggerList["client"]["parameters"] = {}) {
    const queryKey = evolutionTriggerListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EvolutionTriggerList["data"], EvolutionTriggerList["error"]>({
                method: "get",
                url: `/api/v2/evolution-trigger/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 * @summary List evolution triggers
 * @link /api/v2/evolution-trigger/
 */
export function useEvolutionTriggerListHookSuspense<TData = EvolutionTriggerList["response"], TQueryKey extends QueryKey = EvolutionTriggerListSuspenseQueryKey>(params?: EvolutionTriggerList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<EvolutionTriggerList["response"], EvolutionTriggerList["error"], TData, TQueryKey>>;
    client?: EvolutionTriggerList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EvolutionTriggerList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? evolutionTriggerListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...evolutionTriggerListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EvolutionTriggerList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}