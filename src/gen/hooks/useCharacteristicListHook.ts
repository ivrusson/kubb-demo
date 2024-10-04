import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CharacteristicListQueryResponseType, CharacteristicListQueryParamsType } from "../ts/CharacteristicListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CharacteristicListClient = typeof client<CharacteristicListQueryResponseType, Error, never>;
type CharacteristicList = {
    data: CharacteristicListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: CharacteristicListQueryParamsType;
    headerParams: never;
    response: CharacteristicListQueryResponseType;
    client: {
        parameters: Partial<Parameters<CharacteristicListClient>[0]>;
        return: Awaited<ReturnType<CharacteristicListClient>>;
    };
};
export const characteristicListQueryKey = (params?: CharacteristicList["queryParams"]) => ["v5", { url: "/api/v2/characteristic/" }, ...(params ? [params] : [])] as const;
export type CharacteristicListQueryKey = ReturnType<typeof characteristicListQueryKey>;
export function characteristicListQueryOptions(params?: CharacteristicList["queryParams"], options: CharacteristicList["client"]["parameters"] = {}) {
    const queryKey = characteristicListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CharacteristicList["data"], CharacteristicList["error"]>({
                method: "get",
                url: `/api/v2/characteristic/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
 * @summary List charecterictics
 * @link /api/v2/characteristic/
 */
export function useCharacteristicListHook<TData = CharacteristicList["response"], TQueryData = CharacteristicList["response"], TQueryKey extends QueryKey = CharacteristicListQueryKey>(params?: CharacteristicList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<CharacteristicList["response"], CharacteristicList["error"], TData, TQueryData, TQueryKey>>;
    client?: CharacteristicList["client"]["parameters"];
} = {}): UseQueryResult<TData, CharacteristicList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? characteristicListQueryKey(params);
    const query = useQuery({
        ...characteristicListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CharacteristicList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const characteristicListSuspenseQueryKey = (params?: CharacteristicList["queryParams"]) => ["v5", { url: "/api/v2/characteristic/" }, ...(params ? [params] : [])] as const;
export type CharacteristicListSuspenseQueryKey = ReturnType<typeof characteristicListSuspenseQueryKey>;
export function characteristicListSuspenseQueryOptions(params?: CharacteristicList["queryParams"], options: CharacteristicList["client"]["parameters"] = {}) {
    const queryKey = characteristicListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CharacteristicList["data"], CharacteristicList["error"]>({
                method: "get",
                url: `/api/v2/characteristic/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
 * @summary List charecterictics
 * @link /api/v2/characteristic/
 */
export function useCharacteristicListHookSuspense<TData = CharacteristicList["response"], TQueryKey extends QueryKey = CharacteristicListSuspenseQueryKey>(params?: CharacteristicList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<CharacteristicList["response"], CharacteristicList["error"], TData, TQueryKey>>;
    client?: CharacteristicList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CharacteristicList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? characteristicListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...characteristicListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CharacteristicList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}