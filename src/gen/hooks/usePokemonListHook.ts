import client from "@/utils/client.ts";
import { useQuery, queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import type { PokemonListQueryResponseType, PokemonListQueryParamsType } from "../ts/PokemonListType";
import type { QueryObserverOptions, UseQueryResult, QueryKey, UseSuspenseQueryOptions, UseSuspenseQueryResult } from "@tanstack/react-query";

 type PokemonListClient = typeof client<PokemonListQueryResponseType, Error, never>;
type PokemonList = {
    data: PokemonListQueryResponseType;
    error: Error;
    request: never;
    pathParams: never;
    queryParams: PokemonListQueryParamsType;
    headerParams: never;
    response: PokemonListQueryResponseType;
    client: {
        parameters: Partial<Parameters<PokemonListClient>[0]>;
        return: Awaited<ReturnType<PokemonListClient>>;
    };
};
export const pokemonListQueryKey = (params?: PokemonList["queryParams"]) => ["v5", { url: "/api/v2/pokemon/" }, ...(params ? [params] : [])] as const;
export type PokemonListQueryKey = ReturnType<typeof pokemonListQueryKey>;
export function pokemonListQueryOptions(params?: PokemonList["queryParams"], options: PokemonList["client"]["parameters"] = {}) {
    const queryKey = pokemonListQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonList["data"], PokemonList["error"]>({
                method: "get",
                url: `/api/v2/pokemon/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 * @summary List pokemon
 * @link /api/v2/pokemon/
 */
export function usePokemonListHook<TData = PokemonList["response"], TQueryData = PokemonList["response"], TQueryKey extends QueryKey = PokemonListQueryKey>(params?: PokemonList["queryParams"], options: {
    query?: Partial<QueryObserverOptions<PokemonList["response"], PokemonList["error"], TData, TQueryData, TQueryKey>>;
    client?: PokemonList["client"]["parameters"];
} = {}): UseQueryResult<TData, PokemonList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonListQueryKey(params);
    const query = useQuery({
        ...pokemonListQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseQueryResult<TData, PokemonList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}
export const pokemonListSuspenseQueryKey = (params?: PokemonList["queryParams"]) => ["v5", { url: "/api/v2/pokemon/" }, ...(params ? [params] : [])] as const;
export type PokemonListSuspenseQueryKey = ReturnType<typeof pokemonListSuspenseQueryKey>;
export function pokemonListSuspenseQueryOptions(params?: PokemonList["queryParams"], options: PokemonList["client"]["parameters"] = {}) {
    const queryKey = pokemonListSuspenseQueryKey(params);
    return queryOptions({
        queryKey,
        queryFn: async () => {
            const res = await client<PokemonList["data"], PokemonList["error"]>({
                method: "get",
                url: `/api/v2/pokemon/`,
                params,
                ...options
            });
            return res.data;
        },
    });
}
/**
 * @description Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.
 * @summary List pokemon
 * @link /api/v2/pokemon/
 */
export function usePokemonListHookSuspense<TData = PokemonList["response"], TQueryKey extends QueryKey = PokemonListSuspenseQueryKey>(params?: PokemonList["queryParams"], options: {
    query?: Partial<UseSuspenseQueryOptions<PokemonList["response"], PokemonList["error"], TData, TQueryKey>>;
    client?: PokemonList["client"]["parameters"];
} = {}): UseSuspenseQueryResult<TData, PokemonList["error"]> & {
    queryKey: TQueryKey;
} {
    const { query: queryOptions, client: clientOptions = {} } = options ?? {};
    const queryKey = queryOptions?.queryKey ?? pokemonListSuspenseQueryKey(params);
    const query = useSuspenseQuery({
        ...pokemonListSuspenseQueryOptions(params, clientOptions) as unknown as QueryObserverOptions,
        queryKey,
        ...queryOptions as unknown as Omit<QueryObserverOptions, "queryKey">
    }) as UseSuspenseQueryResult<TData, PokemonList["error"]> & {
        queryKey: TQueryKey;
    };
    query.queryKey = queryKey as TQueryKey;
    return query;
}