import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EvolutionTriggerRetrieveQueryResponseType, EvolutionTriggerRetrievePathParamsType } from "../ts/EvolutionTriggerRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EvolutionTriggerRetrieveClient = typeof client<EvolutionTriggerRetrieveQueryResponseType, Error, never>;
type EvolutionTriggerRetrieve = {
    data: EvolutionTriggerRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: EvolutionTriggerRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: EvolutionTriggerRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<EvolutionTriggerRetrieveClient>[0]>;
        return: Awaited<ReturnType<EvolutionTriggerRetrieveClient>>;
    };
};
export const evolutionTriggerRetrieveQueryKey = (id: EvolutionTriggerRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/evolution-trigger/:id/", params: { id: id } }] as const;
export type EvolutionTriggerRetrieveQueryKey = ReturnType<typeof evolutionTriggerRetrieveQueryKey>;
export function evolutionTriggerRetrieveQueryOptions(id: EvolutionTriggerRetrievePathParamsType["id"], options: EvolutionTriggerRetrieve["client"]["parameters"] = {}) {
    const queryKey = evolutionTriggerRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EvolutionTriggerRetrieve["data"], EvolutionTriggerRetrieve["error"]>({
                method: "get",
                url: `/api/v2/evolution-trigger/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 * @summary Get evolution trigger
 * @link /api/v2/evolution-trigger/:id/
 */
export function useEvolutionTriggerRetrieveHook<TData = EvolutionTriggerRetrieve["response"], TQueryData = EvolutionTriggerRetrieve["response"], TQueryKey extends QueryKey = EvolutionTriggerRetrieveQueryKey>(id: EvolutionTriggerRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<EvolutionTriggerRetrieve["response"], EvolutionTriggerRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: EvolutionTriggerRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, EvolutionTriggerRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? evolutionTriggerRetrieveQueryKey(id);
    const query = useQuery({
        ...evolutionTriggerRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EvolutionTriggerRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const evolutionTriggerRetrieveSuspenseQueryKey = (id: EvolutionTriggerRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/evolution-trigger/:id/", params: { id: id } }] as const;
export type EvolutionTriggerRetrieveSuspenseQueryKey = ReturnType<typeof evolutionTriggerRetrieveSuspenseQueryKey>;
export function evolutionTriggerRetrieveSuspenseQueryOptions(id: EvolutionTriggerRetrievePathParamsType["id"], options: EvolutionTriggerRetrieve["client"]["parameters"] = {}) {
    const queryKey = evolutionTriggerRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EvolutionTriggerRetrieve["data"], EvolutionTriggerRetrieve["error"]>({
                method: "get",
                url: `/api/v2/evolution-trigger/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 * @summary Get evolution trigger
 * @link /api/v2/evolution-trigger/:id/
 */
export function useEvolutionTriggerRetrieveHookSuspense<TData = EvolutionTriggerRetrieve["response"], TQueryKey extends QueryKey = EvolutionTriggerRetrieveSuspenseQueryKey>(id: EvolutionTriggerRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<EvolutionTriggerRetrieve["response"], EvolutionTriggerRetrieve["error"], TData, TQueryKey>>;
    client?: EvolutionTriggerRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EvolutionTriggerRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? evolutionTriggerRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...evolutionTriggerRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EvolutionTriggerRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}