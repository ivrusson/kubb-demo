import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonShapeRetrieveQueryResponseType, PokemonShapeRetrievePathParamsType } from "../ts/PokemonShapeRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonShapeRetrieveClient = typeof client<PokemonShapeRetrieveQueryResponseType, Error, never>;
type PokemonShapeRetrieve = {
    data: PokemonShapeRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokemonShapeRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokemonShapeRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonShapeRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokemonShapeRetrieveClient>>;
    };
};
export const pokemonShapeRetrieveQueryKey = (id: PokemonShapeRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-shape/:id/", params: { id: id } }] as const;
export type PokemonShapeRetrieveQueryKey = ReturnType<typeof pokemonShapeRetrieveQueryKey>;
export function pokemonShapeRetrieveQueryOptions(id: PokemonShapeRetrievePathParamsType["id"], options: PokemonShapeRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonShapeRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonShapeRetrieve["data"], PokemonShapeRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-shape/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Shapes used for sorting Pokémon in a Pokédex.
 * @summary Get pokemon shape
 * @link /api/v2/pokemon-shape/:id/
 */
export function usePokemonShapeRetrieveHook<TData = PokemonShapeRetrieve["response"], TQueryData = PokemonShapeRetrieve["response"], TQueryKey extends QueryKey = PokemonShapeRetrieveQueryKey>(id: PokemonShapeRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PokemonShapeRetrieve["response"], PokemonShapeRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonShapeRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonShapeRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonShapeRetrieveQueryKey(id);
    const query = useQuery({
        ...pokemonShapeRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonShapeRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonShapeRetrieveSuspenseQueryKey = (id: PokemonShapeRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-shape/:id/", params: { id: id } }] as const;
export type PokemonShapeRetrieveSuspenseQueryKey = ReturnType<typeof pokemonShapeRetrieveSuspenseQueryKey>;
export function pokemonShapeRetrieveSuspenseQueryOptions(id: PokemonShapeRetrievePathParamsType["id"], options: PokemonShapeRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonShapeRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonShapeRetrieve["data"], PokemonShapeRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-shape/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Shapes used for sorting Pokémon in a Pokédex.
 * @summary Get pokemon shape
 * @link /api/v2/pokemon-shape/:id/
 */
export function usePokemonShapeRetrieveHookSuspense<TData = PokemonShapeRetrieve["response"], TQueryKey extends QueryKey = PokemonShapeRetrieveSuspenseQueryKey>(id: PokemonShapeRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonShapeRetrieve["response"], PokemonShapeRetrieve["error"], TData, TQueryKey>>;
    client?: PokemonShapeRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonShapeRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonShapeRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pokemonShapeRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonShapeRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}