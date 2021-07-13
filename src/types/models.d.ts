type Pokemon = {
  id?: string;
  name?: string;
  description?: string;
  type: Array<string>;
};

type PokemonId = string;
type PokemonName = string;

export { Pokemon, PokemonId, PokemonName };
