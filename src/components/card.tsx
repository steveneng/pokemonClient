
import { FC } from "react";

interface CardProps {
    title: string;
    imgUrl: string;
    id:number;

}


const CardStyling = {

}


const Card: FC<CardProps> = ({ title, imgUrl,id }) => {


    return (
        <div className="pokemon-card">
            <div className="image_container">
                <img loading="lazy" src={imgUrl} alt="Pokemons" />
            </div>
            <div className="description">
                <div className="number">
                 {`#${"0".repeat(4-id.toString().length)}${id}`}
                </div>
                <div className="pokemon-name">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default Card;