import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiArrowRight } from "react-icons/fi";

import { PokemonInfo } from "../../interface";
import "./PokeInfo.scss";

interface Props {
  data: PokemonInfo;
  isOpen: (open: any) => void;
}

const PokeInfo: React.FC<Props> = (props) => {
  const { data, isOpen } = props;
  console.log(data);

  return (
    <div className="pokeinfo">
      <div className="pokeinfo__overlay"></div>
      <div className="pokeinfo__container">
        <div className="pokeinfo__back" onClick={() => isOpen(false)}>
          <IoIosArrowBack className="icon__back" />
        </div>
        <div className="pokeinfo__image">
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt="pokemon"
            className="image"
          />
        </div>
        <div className="pokeinfo__body">
          {/* Info */}
          <div className="pokeinfo__content">
            <p className="pokeinfo__description">N° {data.id}</p>
            <h1 className="pokeinfo__name"> {data.name}</h1>
            <div className="pokeinfo__types">
              {data.types.map((type, index) => (
                <p key={index} className="types">
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>
          {/* Measure */}
          <div className="pokeinfo__measure">
            <div className="pokeinfo__height">
              <h3>Height</h3>
              <span>{data.height / 10}m</span>
            </div>
            <div className="pokeinfo__weight">
              <h3>Weight</h3>
              <span>{data.weight / 10}kg</span>
            </div>
          </div>

          {/* Abilities */}
          <div className="pokeinfo__abilities">
            <h3>Abilities</h3>
            <div className="list">
              {data.abilities.map((ability, index) => (
                <p key={index} className="ablity">
                  {ability.ability.name}
                </p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="pokeinfo__stats">
            {data.stats.map((stats, index) => (
              <div className="stats__content">
                <div className={`stats__title color${index}`}>
                  {stats.stat.name.slice(0, 3)}
                </div>
                <div className="stats__number">{stats.base_stat}</div>
              </div>
            ))}
          </div>

          {/* Evolution */}
          <div className="pokeinfo__evolution">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`}
              alt=""
            />
            <div className="evolution__tilte">
              Poke Next
              <FiArrowRight
                style={{ fontSize: "1.8rem", marginLeft: "1rem" }}
              />
            </div>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
                data.id + 1
              }.gif`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeInfo;
