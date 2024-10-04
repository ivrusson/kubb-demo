import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EvolutionChainRetrieveQueryResponseType, EvolutionChainRetrievePathParamsType } from "../ts/EvolutionChainRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EvolutionChainRetrieveClient = typeof client<EvolutionChainRetrieveQueryResponseType, Error, never>;
type EvolutionChainRetrieve = {
    data: EvolutionChainRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: EvolutionChainRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: EvolutionChainRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<EvolutionChainRetrieveClient>[0]>;
        return: Awaited<ReturnType<EvolutionChainRetrieveClient>>;
    };
};
export const evolutionChainRetrieveQueryKey = (id: EvolutionChainRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/evolution-chain/:id/", params: { id: id } }] as const;
export type EvolutionChainRetrieveQueryKey = ReturnType<typeof evolutionChainRetrieveQueryKey>;
export function evolutionChainRetrieveQueryOptions(id: EvolutionChainRetrievePathParamsType["id"], options: EvolutionChainRetrieve["client"]["parameters"] = {}) {
    const queryKey = evolutionChainRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EvolutionChainRetrieve["data"], EvolutionChainRetrieve["error"]>({
                method: "get",
                url: `/api/v2/evolution-chain/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
 * @summary Get evolution chain
 * @link /api/v2/evolution-chain/:id/
 */
export function useEvolutionChainRetrieveHook<TData = EvolutionChainRetrieve["response"], TQueryData = EvolutionChainRetrieve["response"], TQueryKey extends QueryKey = EvolutionChainRetrieveQueryKey>(id: EvolutionChainRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<EvolutionChainRetrieve["response"], EvolutionChainRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: EvolutionChainRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, EvolutionChainRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? evolutionChainRetrieveQueryKey(id);
    const query = useQuery({
        ...evolutionChainRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EvolutionChainRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const evolutionChainRetrieveSuspenseQueryKey = (id: EvolutionChainRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/evolution-chain/:id/", params: { id: id } }] as const;
export type EvolutionChainRetrieveSuspenseQueryKey = ReturnType<typeof evolutionChainRetrieveSuspenseQueryKey>;
export function evolutionChainRetrieveSuspenseQueryOptions(id: EvolutionChainRetrievePathParamsType["id"], options: EvolutionChainRetrieve["client"]["parameters"] = {}) {
    const queryKey = evolutionChainRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EvolutionChainRetrieve["data"], EvolutionChainRetrieve["error"]>({
                method: "get",
                url: `/api/v2/evolution-chain/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.
 * @summary Get evolution chain
 * @link /api/v2/evolution-chain/:id/
 */
export function useEvolutionChainRetrieveHookSuspense<TData = EvolutionChainRetrieve["response"], TQueryKey extends QueryKey = EvolutionChainRetrieveSuspenseQueryKey>(id: EvolutionChainRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<EvolutionChainRetrieve["response"], EvolutionChainRetrieve["error"], TData, TQueryKey>>;
    client?: EvolutionChainRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EvolutionChainRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? evolutionChainRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...evolutionChainRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EvolutionChainRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}