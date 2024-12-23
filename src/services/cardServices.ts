import axios from "axios";
import { Card } from "../interfaces/Card";

const aip: string = `${process.env.REACT_APP_API}/cards`;
export function getCards() {
    return axios.get(aip);
}

