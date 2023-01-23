import { PokemonFromAPI } from "./types";

export const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const buildUrl = (id: string) => `${BASE_URL}/${id}`;

export const pokemonCache: Record<string, PokemonFromAPI> = {};

export const fetchPokemon = async (
  id: string
): Promise<PokemonFromAPI | null> => {
  if (pokemonCache[id]) {
    return pokemonCache[id];
  }
  const pokemonUrl = buildUrl(id);

  try {
    const res = await fetch(pokemonUrl);
    const data: PokemonFromAPI = await res.json();

    pokemonCache[id] = data;
    return data;
  } catch (err) {
    console.log("Error", err);
    return null;
  }
};
