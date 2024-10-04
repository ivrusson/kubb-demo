import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EncounterMethodRetrieveQueryResponseType, EncounterMethodRetrievePathParamsType } from "../ts/EncounterMethodRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EncounterMethodRetrieveClient = typeof client<EncounterMethodRetrieveQueryResponseType, Error, never>;
type EncounterMethodRetrieve = {
    data: EncounterMethodRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: EncounterMethodRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: EncounterMethodRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<EncounterMethodRetrieveClient>[0]>;
        return: Awaited<ReturnType<EncounterMethodRetrieveClient>>;
    };
};
export const encounterMethodRetrieveQueryKey = (id: EncounterMethodRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/encounter-method/:id/", params: { id: id } }] as const;
export type EncounterMethodRetrieveQueryKey = ReturnType<typeof encounterMethodRetrieveQueryKey>;
export function encounterMethodRetrieveQueryOptions(id: EncounterMethodRetrievePathParamsType["id"], options: EncounterMethodRetrieve["client"]["parameters"] = {}) {
    const queryKey = encounterMethodRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterMethodRetrieve["data"], EncounterMethodRetrieve["error"]>({
                method: "get",
                url: `/api/v2/encounter-method/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
 * @summary Get encounter method
 * @link /api/v2/encounter-method/:id/
 */
export function useEncounterMethodRetrieveHook<TData = EncounterMethodRetrieve["response"], TQueryData = EncounterMethodRetrieve["response"], TQueryKey extends QueryKey = EncounterMethodRetrieveQueryKey>(id: EncounterMethodRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<EncounterMethodRetrieve["response"], EncounterMethodRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: EncounterMethodRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, EncounterMethodRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterMethodRetrieveQueryKey(id);
    const query = useQuery({
        ...encounterMethodRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EncounterMethodRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const encounterMethodRetrieveSuspenseQueryKey = (id: EncounterMethodRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/encounter-method/:id/", params: { id: id } }] as const;
export type EncounterMethodRetrieveSuspenseQueryKey = ReturnType<typeof encounterMethodRetrieveSuspenseQueryKey>;
export function encounterMethodRetrieveSuspenseQueryOptions(id: EncounterMethodRetrievePathParamsType["id"], options: EncounterMethodRetrieve["client"]["parameters"] = {}) {
    const queryKey = encounterMethodRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterMethodRetrieve["data"], EncounterMethodRetrieve["error"]>({
                method: "get",
                url: `/api/v2/encounter-method/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.
 * @summary Get encounter method
 * @link /api/v2/encounter-method/:id/
 */
export function useEncounterMethodRetrieveHookSuspense<TData = EncounterMethodRetrieve["response"], TQueryKey extends QueryKey = EncounterMethodRetrieveSuspenseQueryKey>(id: EncounterMethodRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<EncounterMethodRetrieve["response"], EncounterMethodRetrieve["error"], TData, TQueryKey>>;
    client?: EncounterMethodRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EncounterMethodRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterMethodRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...encounterMethodRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EncounterMethodRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}