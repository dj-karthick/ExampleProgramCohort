import { atom, selector, atomFamily } from "recoil";
import { Todos } from "./todos";

export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: id => {
        return Todos.find( x => x.id == id)
    }
})