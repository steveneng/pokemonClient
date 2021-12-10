import Page from "./page";
import Card from "./card";
import { FC } from "react";


interface pokemonCard {
    image:string; 
    name:string;
    id:number;
  }

interface PokemonPageProps{
    pokemonData:pokemonCard[]
}


const PokemonPage:FC<PokemonPageProps> = ({pokemonData}) => {


    const pokeCards = pokemonData?.map(
        ({
            image: { front_default },
            name,
            id
        }: {
            image: any;
            name: string;
            id:number
        }) => {
      
            return <Card id={id} title={name} imgUrl={front_default} />;
        }
    )



    return (

        <Page>
            {pokeCards}
        </Page>
    )

}


export default PokemonPage;

