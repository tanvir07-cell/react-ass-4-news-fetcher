import { createContext, useContext, useState } from "react"

const SearchNewsFetchContext = createContext()


const SearchNewsFetchProvider = ({children}) => {
    const [searchNews,setSearchNews] = useState({})

    const handleSearchNews = async(searchText) => {
        try{
             const data = await fetch(`http://localhost:8000/v2/search?q=${searchText}`)

             if(!data.ok){
                 throw new Error("Error fetching data")
             }

                const news = await data.json()

            setSearchNews({
            ...searchNews,
            news
        })
    }

    catch(err){
        console.error(err)
    }
        
       



    
    }
    
  return (
    <SearchNewsFetchContext.Provider value = {{searchNews,handleSearchNews}}>
      {children}
    </SearchNewsFetchContext.Provider>
  )
}

export const useSearchNewsFetch = () => useContext(SearchNewsFetchContext)

export default SearchNewsFetchProvider
