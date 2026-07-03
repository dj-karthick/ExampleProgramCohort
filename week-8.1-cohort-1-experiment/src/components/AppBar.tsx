import { SearchBar } from "./SearchBar"


export const AppBar = () => {
    return <div className="flex justify-between">
        <div className=" text-md inline-flex items-center pl-2"> YouTube </div>
        <div>
             <SearchBar></SearchBar>
        </div>
        <div className="text-md inline-flex items-center pr-2"> SignIn </div>
    </div>
}