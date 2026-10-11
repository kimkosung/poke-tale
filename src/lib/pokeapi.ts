// src/lib/pokeapi.ts
import type { PokemonSummary } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function getPokemon(id: number): Promise<PokemonSummary> {
  const [pokemonRes, speciesRes] = await Promise.all([
    fetch(`${BASE_URL}/pokemon/${id}`, { next: { revalidate: 86400 } }),
    fetch(`${BASE_URL}/pokemon-species/${id}`, { next: { revalidate: 86400 } }),
  ]);

  if (!pokemonRes.ok || !speciesRes.ok) {
    throw new Error(`포켓몬 ${id} 불러오기 실패`);
  }

  const pokemon = await pokemonRes.json();
  const species = await speciesRes.json();

  const koreanName =
    species.names.find(
      (n: { language: { name: string }; name: string }) =>
        n.language.name === "ko"
    )?.name ?? pokemon.name;

    console.log(pokemon);
    console.log(species);

  return {
    id: pokemon.id,
    name: pokemon.name,
    koreanName,
    imageUrl:
      pokemon.sprites.other["official-artwork"].front_default ??
      pokemon.sprites.front_default,
    types: pokemon.types.map(
      (t: { type: { name: string } }) => t.type.name
    ),
  };
}

export async function getPokemonList(
  ids: number[]
): Promise<PokemonSummary[]> {
  return Promise.all(ids.map((id) => getPokemon(id)));
}