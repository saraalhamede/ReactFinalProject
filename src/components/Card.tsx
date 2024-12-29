import { FunctionComponent } from "react";
import { Card as card } from "../interfaces/Card";
import "../stylesheet/CardsCompenets.css"

interface CardProps {
    data: card;

}

const Card: FunctionComponent<CardProps> = (props) => {
    const card = props.data;
    return (<>
        <div id="cardblock">
            <img src={card.image.url} alt="card image" id="cardImg" />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <p>Phone: {card.phone}</p>
            <p>Address: {card.address.country},{card.address.city},{card.address.houseNumber}</p>
            <p>Card Number:{card.bizNumber}</p>

        </div>

    </>);

}

export default Card;