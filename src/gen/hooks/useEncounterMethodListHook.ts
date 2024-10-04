import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EncounterMethodListQueryResponseType, EncounterMethodListQueryParamsType } from "../ts/EncounterMethodListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EncounterMethodListClient = typeof client<EncounterMethodListQueryResponseType, Error, never>;
type EncounterMethodList = {
    data: EncounterMethodListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: EncounterMethodListQueryParamsType;
    headerParams: never;
    response: EncounterMethodListQueryResponseType;
    client: {
        parameters: Partial<Parameters<EncounterMethodListClient>[0]>;
        return: Awaited<ReturnType<EncounterMethodListClient>>;
    };
};
export const encounterMethodListQueryKey = (params?: EncounterMethodList["queryParams"]) => ["v5", { url: "/api/v2/encounter-method/" }, ...(params ? [params] : [])] as const;
export type EncounterMethodListQueryKey = ReturnType<typeof encounterMethodListQueryKey>;
export function encounterMethodListQueryOptions(params?: EncounterMethodList["queryParams"], options: EncounterMethodList["client"]["parameters"] = {}) {
    const queryKey = encounterMethodListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterMethodList["data"], EncounterMethodList["error"]>({
                method: "get",
                url: `/api/v2/encounter-method/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
 * @summary List encounter methods
 * @link /api/v2/encounter-method/
 */
export function useEncounterMethodListHook<TData = EncounterMethodList["response"], TQueryData = EncounterMethodList["response"], TQueryKey extends QueryKey = EncounterMethodListQueryKey>(params?: EncounterMethodList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<EncounterMethodList["response"], EncounterMethodList["error"], TData, TQueryData, TQueryKey>>;
    client?: EncounterMethodList["client"]["parameters"];
} = {}): UseQueryResult<TData, EncounterMethodList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterMethodListQueryKey(params);
    const query = useQuery({
        ...encounterMethodListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EncounterMethodList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const encounterMethodListSuspenseQueryKey = (params?: EncounterMethodList["queryParams"]) => ["v5", { url: "/api/v2/encounter-method/" }, ...(params ? [params] : [])] as const;
export type EncounterMethodListSuspenseQueryKey = ReturnType<typeof encounterMethodListSuspenseQueryKey>;
export function encounterMethodListSuspenseQueryOptions(params?: EncounterMethodList["queryParams"], options: EncounterMethodList["client"]["parameters"] = {}) {
    const queryKey = encounterMethodListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterMethodList["data"], EncounterMethodList["error"]>({
                method: "get",
                url: `/api/v2/encounter-method/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
 * @summary List encounter methods
 * @link /api/v2/encounter-method/
 */
export function useEncounterMethodListHookSuspense<TData = EncounterMethodList["response"], TQueryKey extends QueryKey = EncounterMethodListSuspenseQueryKey>(params?: EncounterMethodList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<EncounterMethodList["response"], EncounterMethodList["error"], TData, TQueryKey>>;
    client?: EncounterMethodList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EncounterMethodList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterMethodListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...encounterMethodListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EncounterMethodList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}