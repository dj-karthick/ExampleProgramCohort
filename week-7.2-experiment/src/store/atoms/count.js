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

export const filterTodos = selector({   //Selector using two dependencis.
    key: "filterTodos",
    get: ({get}) => {
        const todos = get(todosAtom);
        const filter = get(filterAtom);

        return todos.filter(x => x.title.includes(filter) || x.description.includes(filter))
    }
})