import { atom, selector, atomFamily, selectorFamily } from "recoil";
import { Todos } from "./todos";
import axios from "axios";

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: selectorFamily({
        key: "todoSelectorFamily",
        get: id => async ({get}) => {
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
            return res.data;
        }
    })
})