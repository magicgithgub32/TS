import { fetchPokemon } from "./api";
import { MAX_ID, MIN_ID } from "./constants";
import "./style.css";
import { PokemonFromAPI } from "./types";

const searchButton = document.querySelector("#search") as HTMLButtonElement;
const pokemonCard = document.querySelector("#pokemon-card") as HTMLDivElement;

const idInput = document.querySelector("#pokemon-id") as HTMLInputElement;

idInput.min = MIN_ID.toString();
idInput.max = MAX_ID.toString();

const injectPokemonTemplate = (pokemon: PokemonFromAPI): void => {
  const template = `
<h3>${pokemon.name}</h3>
<p>ID: ${pokemon.id}</p>
<img src='${pokemon.sprites.front_default}'/>

<p>Tipo 1: ${pokemon.types[0].type.name}</p>


${pokemon.types[1] ? `<p>Tipo 2: ${pokemon.types[1].type.name}</p>` : ""}

`;

  pokemonCard.innerHTML = template;
};

const searchPokemon = async (): Promise<void> => {
  const pokemonId = idInput?.value;

  const pokemon = await fetchPokemon(pokemonId);

  if (pokemon) {
    injectPokemonTemplate(pokemon);
  }
};

searchButton?.addEventListener("click", searchPokemon);
