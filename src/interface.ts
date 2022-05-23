export interface PokemonsState {
  id: number;
  name: string;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
}

export interface PokemonInfo {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  stats: [
    {
      stat: {
        name: string;
      };
      base_stat: number;
    }
  ];
}

export interface Pokemons {
  id: number;
  name: string;
  url: string;
}
