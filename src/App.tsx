import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import ButtonLoadMore from "./components/Button/ButtonLoadMore/ButtonLoadMore";
import ButtonToTop from "./components/Button/ButtonToTop/ButtonToTop";
import Header from "./components/Header/Header";
import PokemonCollection from "./components/PokeCollection/PokeCollection";
import { Pokemons, PokemonsState } from "./interface";

import "./components/Header/Header.scss";
import PokeInfo from "./components/PokeInfo/PokeInfo";
import { GiPokerHand } from "react-icons/gi";

// interface Props {
//   // infoPokemon: (poke: any) => void;
// }

const App: React.FC = (props) => {
  // const { infoPokemon } = props;

  const [searchValue, setSearchValue] = useState<any>();
  const [pokemons, setPokemons] = useState<PokemonsState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [pokemonInfo, setPokemonInfo] = useState<any>({
    id: 1,
    name: "123",
  });

  // Get Pokemons
  const getPokemons = async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );

    setNextUrl(response.data.next);

    response.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );

      setPokemons((state) => [...state, poke.data]);
      setLoading(false);
    });
  };
  useEffect(() => {
    getPokemons();
  }, []);

  // hanlde Load More
  const handleLoadMore = async () => {
    setLoading(true);

    const response = await axios.get(nextUrl);
    setNextUrl(response.data.next);
    response.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
      setLoading(false);
    });
  };

  // Search Pokemon
  useEffect(() => {
    if (!searchValue) {
      getPokemons();
    }

    const SearchResult = pokemons.filter((poke) => {
      return poke.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setPokemons(SearchResult);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(123);
  }, [searchValue]);

  // useEffect(() => {
  //   window.onclick = () => {
  //     alert("123");
  //   };
  // }, []);

  return (
    <div className="home">
      <Header />

      {/* Search */}
      <div className="search">
        <input
          value={searchValue}
          type="text"
          id="search"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <div className="search__icon">
          <FiSearch />
        </div>
      </div>

      {/* Pokemon Collection */}
      <PokemonCollection
        pokemons={pokemons}
        infoPokemon={(poke: any) => {
          setPokemonInfo(poke);
        }}
        openInfo={(open: any) => setIsOpen(open)}
      />

      {isOpen && (
        <PokeInfo data={pokemonInfo} isOpen={(open: any) => setIsOpen(open)} />
      )}

      {/* Button */}
      {loading ? (
        <div className="">Loading...</div>
      ) : (
        <ButtonLoadMore onClick={handleLoadMore} />
      )}

      <ButtonToTop />
    </div>
  );
};

export default App;
