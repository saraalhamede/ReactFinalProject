import { FunctionComponent, useEffect, useState } from "react";
import { getAllCards } from "../services/cardServices";
import { Card as cards } from "../interfaces/Card";
import "../stylesheet/CardsCompenets.css";
import Card from "./Card";
interface CardVeiwProps {

}

const CardVeiw: FunctionComponent<CardVeiwProps> = () => {
    const [Carrd, setCards] = useState<cards[]>([]);
    const [cardsChanged, setCardsChanged] = useState<boolean>(false);

    useEffect(() => {
        getAllCards()
            .then((res) => {
                setCards(res.data);
            })
            .catch((err) => console.log(err));
    }, [cardsChanged]);
    let refresh = () => {
        setCardsChanged(!cardsChanged);
    };
    return (<>
        <div className="mainPage">
            <h1>Cards Page</h1>
            <p>Here you can find business cards from all categories</p>
            <div id="Cards">
                {Carrd.map((cards) => <Card data={cards} />)}
            </div>
        </div>
    </>);
}

export default CardVeiw;

function err(reason: any): PromiseLike<never> {
    throw new Error("Function not implemented.");
}
