import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { MachineRetrieveQueryResponseType, MachineRetrievePathParamsType } from "../ts/MachineRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type MachineRetrieveClient = typeof client<MachineRetrieveQueryResponseType, Error, never>;
type MachineRetrieve = {
    data: MachineRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: MachineRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: MachineRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<MachineRetrieveClient>[0]>;
        return: Awaited<ReturnType<MachineRetrieveClient>>;
    };
};
export const machineRetrieveQueryKey = (id: MachineRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/machine/:id/", params: { id: id } }] as const;
export type MachineRetrieveQueryKey = ReturnType<typeof machineRetrieveQueryKey>;
export function machineRetrieveQueryOptions(id: MachineRetrievePathParamsType["id"], options: MachineRetrieve["client"]["parameters"] = {}) {
    const queryKey = machineRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MachineRetrieve["data"], MachineRetrieve["error"]>({
                method: "get",
                url: `/api/v2/machine/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
 * @summary Get machine
 * @link /api/v2/machine/:id/
 */
export function useMachineRetrieveHook<TData = MachineRetrieve["response"], TQueryData = MachineRetrieve["response"], TQueryKey extends QueryKey = MachineRetrieveQueryKey>(id: MachineRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<MachineRetrieve["response"], MachineRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: MachineRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, MachineRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? machineRetrieveQueryKey(id);
    const query = useQuery({
        ...machineRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, MachineRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const machineRetrieveSuspenseQueryKey = (id: MachineRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/machine/:id/", params: { id: id } }] as const;
export type MachineRetrieveSuspenseQueryKey = ReturnType<typeof machineRetrieveSuspenseQueryKey>;
export function machineRetrieveSuspenseQueryOptions(id: MachineRetrievePathParamsType["id"], options: MachineRetrieve["client"]["parameters"] = {}) {
    const queryKey = machineRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<MachineRetrieve["data"], MachineRetrieve["error"]>({
                method: "get",
                url: `/api/v2/machine/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.
 * @summary Get machine
 * @link /api/v2/machine/:id/
 */
export function useMachineRetrieveHookSuspense<TData = MachineRetrieve["response"], TQueryKey extends QueryKey = MachineRetrieveSuspenseQueryKey>(id: MachineRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<MachineRetrieve["response"], MachineRetrieve["error"], TData, TQueryKey>>;
    client?: MachineRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, MachineRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? machineRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...machineRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, MachineRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}