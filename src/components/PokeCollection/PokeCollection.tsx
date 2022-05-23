import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { PokemonsState } from "../../interface";
import PokemonComponent from "../PokeComponent/PokeComponent";
import "./PokeCollectionStyles.scss";
// import PokeInfo from "../PokeInfo/PokeInfo";

interface Props {
  pokemons: PokemonsState[];
  infoPokemon: (poke: any) => void;
  openInfo: (open: any) => void;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, infoPokemon, openInfo } = props;

  return (
    <div className="poke__collection">
      {pokemons.map((poke, index) => (
        <motion.div
          initial={{ y: "200px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="poke__list"
            key={index}
            onClick={() => {
              infoPokemon(poke);
              openInfo(true);
            }}
          >
            <PokemonComponent
              className="poke__item"
              id={poke.id}
              name={poke.name}
              types={poke.types.map((type, index) => {
                return type.type.name;
              })}
              // image={poke.sprites.other.dream_world.front_default}
              // image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${poke.id}.gif`}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PokemonCollection;
