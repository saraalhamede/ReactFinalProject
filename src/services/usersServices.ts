import axios from "axios";
import { User } from "../interfaces/User";
const api: string = `${process.env.REACT_APP_API}/users`;
export function checkUser(user: User) {
    return axios.get(`${api}?email=${user.email}&&password=${user.password}`);
}

export function addUser(user: User) {
    return axios.post(api, user);
}

export function getUserById() {
    const id = JSON.parse(localStorage.getItem("userId") as string);
    return axios.get(api + "/" + id);
}