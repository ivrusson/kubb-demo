import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PalParkAreaRetrieveQueryResponseType, PalParkAreaRetrievePathParamsType } from "../ts/PalParkAreaRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PalParkAreaRetrieveClient = typeof client<PalParkAreaRetrieveQueryResponseType, Error, never>;
type PalParkAreaRetrieve = {
    data: PalParkAreaRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PalParkAreaRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PalParkAreaRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PalParkAreaRetrieveClient>[0]>;
        return: Awaited<ReturnType<PalParkAreaRetrieveClient>>;
    };
};
export const palParkAreaRetrieveQueryKey = (id: PalParkAreaRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pal-park-area/:id/", params: { id: id } }] as const;
export type PalParkAreaRetrieveQueryKey = ReturnType<typeof palParkAreaRetrieveQueryKey>;
export function palParkAreaRetrieveQueryOptions(id: PalParkAreaRetrievePathParamsType["id"], options: PalParkAreaRetrieve["client"]["parameters"] = {}) {
    const queryKey = palParkAreaRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PalParkAreaRetrieve["data"], PalParkAreaRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pal-park-area/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
 * @summary Get pal park area
 * @link /api/v2/pal-park-area/:id/
 */
export function usePalParkAreaRetrieveHook<TData = PalParkAreaRetrieve["response"], TQueryData = PalParkAreaRetrieve["response"], TQueryKey extends QueryKey = PalParkAreaRetrieveQueryKey>(id: PalParkAreaRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PalParkAreaRetrieve["response"], PalParkAreaRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PalParkAreaRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PalParkAreaRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? palParkAreaRetrieveQueryKey(id);
    const query = useQuery({
        ...palParkAreaRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PalParkAreaRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const palParkAreaRetrieveSuspenseQueryKey = (id: PalParkAreaRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pal-park-area/:id/", params: { id: id } }] as const;
export type PalParkAreaRetrieveSuspenseQueryKey = ReturnType<typeof palParkAreaRetrieveSuspenseQueryKey>;
export function palParkAreaRetrieveSuspenseQueryOptions(id: PalParkAreaRetrievePathParamsType["id"], options: PalParkAreaRetrieve["client"]["parameters"] = {}) {
    const queryKey = palParkAreaRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PalParkAreaRetrieve["data"], PalParkAreaRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pal-park-area/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Areas used for grouping Pokémon encounters in Pal Park. They're like habitats that are specific to Pal Park.
 * @summary Get pal park area
 * @link /api/v2/pal-park-area/:id/
 */
export function usePalParkAreaRetrieveHookSuspense<TData = PalParkAreaRetrieve["response"], TQueryKey extends QueryKey = PalParkAreaRetrieveSuspenseQueryKey>(id: PalParkAreaRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PalParkAreaRetrieve["response"], PalParkAreaRetrieve["error"], TData, TQueryKey>>;
    client?: PalParkAreaRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PalParkAreaRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? palParkAreaRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...palParkAreaRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PalParkAreaRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}