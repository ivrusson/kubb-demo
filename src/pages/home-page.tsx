import PokemonList from "@/components/PokemonList";

export function HomePage() {
  return (
    <section className="container text-center">
      <h1 className="text-3xl font-bold mb-4">📱 Pokedex with Kubb</h1>
      <PokemonList />
    </section>
  );
}

