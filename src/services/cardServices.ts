import axios from "axios";
import { Card } from "../interfaces/Card";

const api: string = `${process.env.REACT_APP_API}/cards`;

export function getAllProducts() {
    return axios.get(api);
}

export function getCardById(id: string) {
    return axios.get(`${api}/${id}`);
}

export function addCard(card: Card) {
    return axios.post(api, card);
}

export function updateCard(card: Card) {
    return axios.put(`${api}/${card._id}`, card);
}

export function deteleCard(id: string) {
    return axios.patch(`${api}/${id}`);
}