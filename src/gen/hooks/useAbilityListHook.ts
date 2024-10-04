import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { AbilityListQueryResponseType, AbilityListQueryParamsType } from "../ts/AbilityListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type AbilityListClient = typeof client<AbilityListQueryResponseType, Error, never>;
type AbilityList = {
    data: AbilityListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: AbilityListQueryParamsType;
    headerParams: never;
    response: AbilityListQueryResponseType;
    client: {
        parameters: Partial<Parameters<AbilityListClient>[0]>;
        return: Awaited<ReturnType<AbilityListClient>>;
    };
};
export const abilityListQueryKey = (params?: AbilityList["queryParams"]) => ["v5", { url: "/api/v2/ability/" }, ...(params ? [params] : [])] as const;
export type AbilityListQueryKey = ReturnType<typeof abilityListQueryKey>;
export function abilityListQueryOptions(params?: AbilityList["queryParams"], options: AbilityList["client"]["parameters"] = {}) {
    const queryKey = abilityListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<AbilityList["data"], AbilityList["error"]>({
                method: "get",
                url: `/api/v2/ability/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 * @link /api/v2/ability/
 */
export function useAbilityListHook<TData = AbilityList["response"], TQueryData = AbilityList["response"], TQueryKey extends QueryKey = AbilityListQueryKey>(params?: AbilityList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<AbilityList["response"], AbilityList["error"], TData, TQueryData, TQueryKey>>;
    client?: AbilityList["client"]["parameters"];
} = {}): UseQueryResult<TData, AbilityList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? abilityListQueryKey(params);
    const query = useQuery({
        ...abilityListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, AbilityList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const abilityListSuspenseQueryKey = (params?: AbilityList["queryParams"]) => ["v5", { url: "/api/v2/ability/" }, ...(params ? [params] : [])] as const;
export type AbilityListSuspenseQueryKey = ReturnType<typeof abilityListSuspenseQueryKey>;
export function abilityListSuspenseQueryOptions(params?: AbilityList["queryParams"], options: AbilityList["client"]["parameters"] = {}) {
    const queryKey = abilityListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<AbilityList["data"], AbilityList["error"]>({
                method: "get",
                url: `/api/v2/ability/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.
 * @link /api/v2/ability/
 */
export function useAbilityListHookSuspense<TData = AbilityList["response"], TQueryKey extends QueryKey = AbilityListSuspenseQueryKey>(params?: AbilityList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<AbilityList["response"], AbilityList["error"], TData, TQueryKey>>;
    client?: AbilityList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, AbilityList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? abilityListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...abilityListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, AbilityList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}