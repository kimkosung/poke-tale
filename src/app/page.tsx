import PokemonCard from "../components/PokemonCard";
import { getPokemonList } from "../lib/pokeapi";

export default async function Home() {

  const ids = Array.from({ length: 20 }, (_, i) => i + 1);
  const pokemons = await getPokemonList([1]);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-3xl font-bold">파트너 로드</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {pokemons.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </main>
  );
}