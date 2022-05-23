import React, { useEffect, useState } from "react";
import { GiPokecog } from "react-icons/gi";
import { Link } from "react-router-dom";

import "./Header.scss";
import { PokemonsState } from "../../interface";

interface Pokemons {
  id: number;
  name: string;
  url: string;
}

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1>
          <GiPokecog className="icon__logo" />
          Pokemon nft
        </h1>
      </Link>
    </header>
  );
};

export default Header;
