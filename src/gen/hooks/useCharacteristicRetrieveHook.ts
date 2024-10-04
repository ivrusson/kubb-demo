import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { CharacteristicRetrieveQueryResponseType, CharacteristicRetrievePathParamsType } from "../ts/CharacteristicRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type CharacteristicRetrieveClient = typeof client<CharacteristicRetrieveQueryResponseType, Error, never>;
type CharacteristicRetrieve = {
    data: CharacteristicRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: CharacteristicRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: CharacteristicRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<CharacteristicRetrieveClient>[0]>;
        return: Awaited<ReturnType<CharacteristicRetrieveClient>>;
    };
};
export const characteristicRetrieveQueryKey = (id: CharacteristicRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/characteristic/:id/", params: { id: id } }] as const;
export type CharacteristicRetrieveQueryKey = ReturnType<typeof characteristicRetrieveQueryKey>;
export function characteristicRetrieveQueryOptions(id: CharacteristicRetrievePathParamsType["id"], options: CharacteristicRetrieve["client"]["parameters"] = {}) {
    const queryKey = characteristicRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CharacteristicRetrieve["data"], CharacteristicRetrieve["error"]>({
                method: "get",
                url: `/api/v2/characteristic/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
 * @summary Get characteristic
 * @link /api/v2/characteristic/:id/
 */
export function useCharacteristicRetrieveHook<TData = CharacteristicRetrieve["response"], TQueryData = CharacteristicRetrieve["response"], TQueryKey extends QueryKey = CharacteristicRetrieveQueryKey>(id: CharacteristicRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<CharacteristicRetrieve["response"], CharacteristicRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: CharacteristicRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, CharacteristicRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? characteristicRetrieveQueryKey(id);
    const query = useQuery({
        ...characteristicRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, CharacteristicRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const characteristicRetrieveSuspenseQueryKey = (id: CharacteristicRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/characteristic/:id/", params: { id: id } }] as const;
export type CharacteristicRetrieveSuspenseQueryKey = ReturnType<typeof characteristicRetrieveSuspenseQueryKey>;
export function characteristicRetrieveSuspenseQueryOptions(id: CharacteristicRetrievePathParamsType["id"], options: CharacteristicRetrieve["client"]["parameters"] = {}) {
    const queryKey = characteristicRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<CharacteristicRetrieve["data"], CharacteristicRetrieve["error"]>({
                method: "get",
                url: `/api/v2/characteristic/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.
 * @summary Get characteristic
 * @link /api/v2/characteristic/:id/
 */
export function useCharacteristicRetrieveHookSuspense<TData = CharacteristicRetrieve["response"], TQueryKey extends QueryKey = CharacteristicRetrieveSuspenseQueryKey>(id: CharacteristicRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<CharacteristicRetrieve["response"], CharacteristicRetrieve["error"], TData, TQueryKey>>;
    client?: CharacteristicRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, CharacteristicRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? characteristicRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...characteristicRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, CharacteristicRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}