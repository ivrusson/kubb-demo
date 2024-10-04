import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonRetrieveQueryResponseType, PokemonRetrievePathParamsType } from "../ts/PokemonRetrieveType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonRetrieveClient = typeof client<PokemonRetrieveQueryResponseType, Error, never>;
type PokemonRetrieve = {
    data: PokemonRetrieveQueryResponseType;
    error: Error;
    request: never;
    pathParams: PokemonRetrievePathParamsType;
    queryParams: never;
    headerParams: never;
    response: PokemonRetrieveQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonRetrieveClient>[0]>;
        return: Awaited<ReturnType<PokemonRetrieveClient>>;
    };
};
export const pokemonRetrieveQueryKey = (id: PokemonRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon/:id/", params: { id: id } }] as const;
export type PokemonRetrieveQueryKey = ReturnType<typeof pokemonRetrieveQueryKey>;
export function pokemonRetrieveQueryOptions(id: PokemonRetrievePathParamsType["id"], options: PokemonRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonRetrieveQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonRetrieve["data"], PokemonRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 * @summary Get pokemon
 * @link /api/v2/pokemon/:id/
 */
export function usePokemonRetrieveHook<TData = PokemonRetrieve["response"], TQueryData = PokemonRetrieve["response"], TQueryKey extends QueryKey = PokemonRetrieveQueryKey>(id: PokemonRetrievePathParamsType["id"], options: {
    query?: Partial<QueryObserverOptions<PokemonRetrieve["response"], PokemonRetrieve["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonRetrieve["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonRetrieveQueryKey(id);
    const query = useQuery({
        ...pokemonRetrieveQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonRetrieveSuspenseQueryKey = (id: PokemonRetrievePathParamsType["id"]) => ["v5", { url: "/api/v2/pokemon/:id/", params: { id: id } }] as const;
export type PokemonRetrieveSuspenseQueryKey = ReturnType<typeof pokemonRetrieveSuspenseQueryKey>;
export function pokemonRetrieveSuspenseQueryOptions(id: PokemonRetrievePathParamsType["id"], options: PokemonRetrieve["client"]["parameters"] = {}) {
    const queryKey = pokemonRetrieveSuspenseQueryKey(id);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonRetrieve["data"], PokemonRetrieve["error"]>({
                method: "get",
                url: `/api/v2/pokemon/${id}/`,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 * @summary Get pokemon
 * @link /api/v2/pokemon/:id/
 */
export function usePokemonRetrieveHookSuspense<TData = PokemonRetrieve["response"], TQueryKey extends QueryKey = PokemonRetrieveSuspenseQueryKey>(id: PokemonRetrievePathParamsType["id"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonRetrieve["response"], PokemonRetrieve["error"], TData, TQueryKey>>;
    client?: PokemonRetrieve["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonRetrieve["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonRetrieveSuspenseQueryKey(id);
    const query = useSuspenseQuery({
        ...pokemonRetrieveSuspenseQueryOptions(id, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonRetrieve["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}