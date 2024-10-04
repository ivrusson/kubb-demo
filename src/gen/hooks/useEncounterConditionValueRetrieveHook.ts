import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { EncounterConditionValueRetrieveQueryResponseType, EncounterConditionValueRetrievePathParamsType } from "../ts/EncounterConditionValueRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type EncounterConditionValueRetrieveClient = typeof client<EncounterConditionValueRetrieveQueryResponseType, Error, never>;
type EncounterConditionValueRetrieve = {
    data: EncounterConditionValueRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: EncounterConditionValueRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: EncounterConditionValueRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<EncounterConditionValueRetrieveClient>[0]>;
        return: Awaited<ReturnType<EncounterConditionValueRetrieveClient>>;
    };
};
export const encounterConditionValueRetrieveQueryKey = (id: EncounterConditionValueRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/encounter-condition-value/:id/", params: { id: id } }] as const;
export type EncounterConditionValueRetrieveQueryKey = ReturnType<typeof encounterConditionValueRetrieveQueryKey>;
export function encounterConditionValueRetrieveQueryOptions(id: EncounterConditionValueRetrievePathParamsType["id"], options: EncounterConditionValueRetrieve["client"]["parameters"] = {}) {
    const queryKey = encounterConditionValueRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterConditionValueRetrieve["data"], EncounterConditionValueRetrieve["error"]>({
                method: "get",
                url: `/api/v2/encounter-condition-value/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 * @summary Get encounter condition value
 * @link /api/v2/encounter-condition-value/:id/
 */
export function useEncounterConditionValueRetrieveHook<TData = EncounterConditionValueRetrieve["response"], TQueryData = EncounterConditionValueRetrieve["response"], TQueryKey extends QueryKey = EncounterConditionValueRetrieveQueryKey>(id: EncounterConditionValueRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<EncounterConditionValueRetrieve["response"], EncounterConditionValueRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: EncounterConditionValueRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, EncounterConditionValueRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterConditionValueRetrieveQueryKey(id);
    const query = useQuery({
        ...encounterConditionValueRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, EncounterConditionValueRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const encounterConditionValueRetrieveSuspenseQueryKey = (id: EncounterConditionValueRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/encounter-condition-value/:id/", params: { id: id } }] as const;
export type EncounterConditionValueRetrieveSuspenseQueryKey = ReturnType<typeof encounterConditionValueRetrieveSuspenseQueryKey>;
export function encounterConditionValueRetrieveSuspenseQueryOptions(id: EncounterConditionValueRetrievePathParamsType["id"], options: EncounterConditionValueRetrieve["client"]["parameters"] = {}) {
    const queryKey = encounterConditionValueRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<EncounterConditionValueRetrieve["data"], EncounterConditionValueRetrieve["error"]>({
                method: "get",
                url: `/api/v2/encounter-condition-value/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.
 * @summary Get encounter condition value
 * @link /api/v2/encounter-condition-value/:id/
 */
export function useEncounterConditionValueRetrieveHookSuspense<TData = EncounterConditionValueRetrieve["response"], TQueryKey extends QueryKey = EncounterConditionValueRetrieveSuspenseQueryKey>(id: EncounterConditionValueRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<EncounterConditionValueRetrieve["response"], EncounterConditionValueRetrieve["error"], TData, TQueryKey>>;
    client?: EncounterConditionValueRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, EncounterConditionValueRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? encounterConditionValueRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...encounterConditionValueRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, EncounterConditionValueRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}