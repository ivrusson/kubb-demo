import { usePokemonListHook } from '@/gen';
import { PokemonListItem } from './PokemonListItem';
import { useMemo } from 'react';

const getPokemonIdFromUrl = (url: string) => {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 2];
}

const PokemonList = () => {
  const { data, isLoading, error } = usePokemonListHook({
    limit: 10,
  });

  console.log(data);

  const pokemons = useMemo(
    () =>
      (data?.results ?? []).map((p) => ({
        id: getPokemonIdFromUrl(p.url),
        name: p.name,
      })),
    [data]
  );

  if (isLoading) {
    return <div className="loading">Loading...</div>
  }

  if (error) {
    return <div className="error">Error</div>;
  }

  return (
    <section className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-2'>
      {pokemons.map((pokemon) => (
        <PokemonListItem key={pokemon.name} id={pokemon.id} name={pokemon.name} />
      ))}
    </section>
  );
}

export default PokemonList
