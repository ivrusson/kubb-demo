import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonFormRetrieveQueryResponseType, PokemonFormRetrievePathParamsType } from "../ts/PokemonFormRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonFormRetrieveClient = typeof client<PokemonFormRetrieveQueryResponseType, Error, never>;
type PokemonFormRetrieve = {
    data: PokemonFormRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokemonFormRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokemonFormRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonFormRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokemonFormRetrieveClient>>;
    };
};
export const pokemonFormRetrieveQueryKey = (id: PokemonFormRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-form/:id/", params: { id: id } }] as const;
export type PokemonFormRetrieveQueryKey = ReturnType<typeof pokemonFormRetrieveQueryKey>;
export function pokemonFormRetrieveQueryOptions(id: PokemonFormRetrievePathParamsType["id"], options: PokemonFormRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonFormRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonFormRetrieve["data"], PokemonFormRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-form/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 * @summary Get pokemon form
 * @link /api/v2/pokemon-form/:id/
 */
export function usePokemonFormRetrieveHook<TData = PokemonFormRetrieve["response"], TQueryData = PokemonFormRetrieve["response"], TQueryKey extends QueryKey = PokemonFormRetrieveQueryKey>(id: PokemonFormRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PokemonFormRetrieve["response"], PokemonFormRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonFormRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonFormRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonFormRetrieveQueryKey(id);
    const query = useQuery({
        ...pokemonFormRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonFormRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonFormRetrieveSuspenseQueryKey = (id: PokemonFormRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon-form/:id/", params: { id: id } }] as const;
export type PokemonFormRetrieveSuspenseQueryKey = ReturnType<typeof pokemonFormRetrieveSuspenseQueryKey>;
export function pokemonFormRetrieveSuspenseQueryOptions(id: PokemonFormRetrievePathParamsType["id"], options: PokemonFormRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonFormRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonFormRetrieve["data"], PokemonFormRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon-form/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety.
 * @summary Get pokemon form
 * @link /api/v2/pokemon-form/:id/
 */
export function usePokemonFormRetrieveHookSuspense<TData = PokemonFormRetrieve["response"], TQueryKey extends QueryKey = PokemonFormRetrieveSuspenseQueryKey>(id: PokemonFormRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonFormRetrieve["response"], PokemonFormRetrieve["error"], TData, TQueryKey>>;
    client?: PokemonFormRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonFormRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonFormRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pokemonFormRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonFormRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}