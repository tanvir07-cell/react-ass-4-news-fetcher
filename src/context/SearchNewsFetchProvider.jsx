import { createContext, useContext, useState } from "react"
import useNewsQuery from "../hooks/useNewsQuery"

const SearchNewsFetchContext = createContext()


const SearchNewsFetchProvider = ({children}) => {
   

    const [searchQuery,setSearchQuery] = useState("")

    const handleSearchQuery = (query) => {
        setSearchQuery(query)
    }

    const [news,loading] = useNewsQuery("",searchQuery)

    

    
    
  return (
    <SearchNewsFetchContext.Provider value = {{news,loading,searchQuery,handleSearchQuery}}>
      {children}
    </SearchNewsFetchContext.Provider>
  )
}

export const useSearchNewsFetch = () => useContext(SearchNewsFetchContext)

export default SearchNewsFetchProvider
