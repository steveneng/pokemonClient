import { FC, useState, useEffect } from "react";
import Page from "./components/page";
import { gql, useQuery } from "@apollo/client";
import Card from "./components/card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonPage from "./components/pokemonCollection";

const GET_POKEMON = gql`
  query GetAllPokemon($limit: Int, $offset: Int) {
    getAllPokemon(limit: $limit, offset: $offset) {
      results {
        id
        name
        image {
          front_default
        }
      }
      count
    }
  }
`;


const GET_POKEMON_GEN = gql` query GetAllPokemon($gen: Int!) {
  getPokemonByGeneration(gen: $gen) {
    name
    url
    image {
      front_default
    }
    id
  }
}
`

const App: FC = () => {
  const [page, SetPage] = useState<number>(0);
  const [pageIncrement, setPageIncrement] = useState<number>(0);
  // const { loading, error, data } = useQuery(GET_POKEMON, {
  //   variables: { limit: 20, offset: page },
  // });

  const { loading, error, data } = useQuery(GET_POKEMON_GEN, {
    variables: { gen:6 },
  });


  if (loading) {
    return (
      <div className="center-on-page">
        <div className="pokeball">
          <div className="pokeball__button"></div>
        </div>
      </div>
    );
  }

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    SetPage((val) => val + 20);
  };

  const clickHandlerPrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (page === 0) return;
    SetPage((val) => val - 20);
  };


  interface pokemonCard {
    image:string; 
    name:string;
    id:number;
  }

  // const pokeData:pokemonCard[] = data?.getAllPokemon.results
  console.log(data)
  const pokeData:pokemonCard[] = data?.getPokemonByGeneration

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<PokemonPage pokemonData={pokeData}/>}/>
        </Routes>
        <div>
          <button onClick={clickHandlerPrev}>Previous</button>
          <button onClick={clickHandler}>Next</button>
        </div>
      </div>
    </Router>
  );
};

export default App;
