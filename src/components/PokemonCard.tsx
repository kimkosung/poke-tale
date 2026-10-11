// src/components/PokemonCard.tsx
import Image from "next/image";
import type { PokemonSummary } from "../types/pokemon";

export default function PokemonCard({ pokemon }: { pokemon: PokemonSummary }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-sm">
      <p className="text-xs text-gray-400">
        No.{String(pokemon.id).padStart(3, "0")}
      </p>
      <Image
        src={pokemon.imageUrl}
        alt={pokemon.koreanName}
        width={120}
        height={120}
        className="mx-auto"
      />
      <h2 className="mt-2 font-bold text-gray-900">{pokemon.koreanName}</h2>
      <div className="mt-2 flex justify-center gap-1">
        {pokemon.types.map((type) => (
          <span
            key={type}
            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
}