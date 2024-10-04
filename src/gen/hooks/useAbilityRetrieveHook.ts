import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { AbilityRetrieveQueryResponseType, AbilityRetrievePathParamsType } from "../ts/AbilityRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type AbilityRetrieveClient = typeof client<AbilityRetrieveQueryResponseType, Error, never>;
type AbilityRetrieve = {
    data: AbilityRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: AbilityRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: AbilityRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<AbilityRetrieveClient>[0]>;
        return: Awaited<ReturnType<AbilityRetrieveClient>>;
    };
};
export const abilityRetrieveQueryKey = (id: AbilityRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/ability/:id/", params: { id: id } }] as const;
export type AbilityRetrieveQueryKey = ReturnType<typeof abilityRetrieveQueryKey>;
export function abilityRetrieveQueryOptions(id: AbilityRetrievePathParamsType["id"], options: AbilityRetrieve["client"]["parameters"] = {}) {
    const queryKey = abilityRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<AbilityRetrieve["data"], AbilityRetrieve["error"]>({
                method: "get",
                url: `/api/v2/ability/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 * @link /api/v2/ability/:id/
 */
export function useAbilityRetrieveHook<TData = AbilityRetrieve["response"], TQueryData = AbilityRetrieve["response"], TQueryKey extends QueryKey = AbilityRetrieveQueryKey>(id: AbilityRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<AbilityRetrieve["response"], AbilityRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: AbilityRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, AbilityRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? abilityRetrieveQueryKey(id);
    const query = useQuery({
        ...abilityRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, AbilityRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const abilityRetrieveSuspenseQueryKey = (id: AbilityRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/ability/:id/", params: { id: id } }] as const;
export type AbilityRetrieveSuspenseQueryKey = ReturnType<typeof abilityRetrieveSuspenseQueryKey>;
export function abilityRetrieveSuspenseQueryOptions(id: AbilityRetrievePathParamsType["id"], options: AbilityRetrieve["client"]["parameters"] = {}) {
    const queryKey = abilityRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<AbilityRetrieve["data"], AbilityRetrieve["error"]>({
                method: "get",
                url: `/api/v2/ability/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 * @link /api/v2/ability/:id/
 */
export function useAbilityRetrieveHookSuspense<TData = AbilityRetrieve["response"], TQueryKey extends QueryKey = AbilityRetrieveSuspenseQueryKey>(id: AbilityRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<AbilityRetrieve["response"], AbilityRetrieve["error"], TData, TQueryKey>>;
    client?: AbilityRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, AbilityRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? abilityRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...abilityRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, AbilityRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}