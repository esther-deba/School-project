import { createContext, useState } from "react";
const SearchContext = createContext()
const SearchProvider = ({children})=>{
    const [search , setSearch] = useState('')
    const [mode , setMode] = useState('destinations')
    return (
        <SearchContext.Provider value={{search , setSearch , mode , setMode}}>
            {children}
        </SearchContext.Provider>
        )
}
export {SearchProvider , SearchContext} ;