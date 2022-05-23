import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PokeComponentStyles.scss";

interface Props {
  className: string;
  id: number;
  name: string;
  image: string;
  types: string[];
}

const PokemonComponent: React.FC<Props> = (props) => {
  const { id, name, image, types, className } = props;

  return (
    // <Link to={`/infoPokemon/${id}`}>
    <div className={className}>
      <img src={image} alt="" className="poke__image" />
      <div className="poke__content">
        <div className="poke__description">N* {id}</div>
        <div className="poke__name">{name}</div>
        <div className="poke__type">
          {/* {types.length > 1 ? (
            <>
              <p className="first">{types[0]}</p>
              <p className="second">{types[1]}</p>
            </>
          ) : (
            <p className="first">{types[0]}</p>
          )} */}
          {types.map((type, index) => (
            <p className={`type color${index}`}>{type}</p>
          ))}
        </div>
      </div>
    </div>
    // </Link>
  );
};

export default PokemonComponent;
