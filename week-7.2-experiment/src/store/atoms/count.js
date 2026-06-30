import { atom, selector } from "recoil";


export const countAtom = atom({     //Defining the Atom
    key : 'countAtom',
    default : 0
})

export const evenSelector = selector({  //Defining the selector
    key: "evenSelector",
    get: ({get})=> {
        const count = get(countAtom);
        return count % 2;
    }
})