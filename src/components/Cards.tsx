import { FunctionComponent } from "react";

import axios from "axios";

interface CardsProps {

}
const aip: string = `${process.env.REACT_APP_API}/cards`;

const Cards: FunctionComponent<CardsProps> = () => {
    const card = (() => {
        axios.get(aip).then((res) => {
            return res.data;
        });
    })
    console.log(card)
    return (<></>);
}

export default Cards;