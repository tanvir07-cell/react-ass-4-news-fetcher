import { createContext, useContext, useState } from 'react'
import useNewsQuery from '../hooks/useNewsQuery'



const NewsFetchContext = createContext()

const NewsFetchProvider = ({children}) => {
      const [category,setCategory] = useState("")

    const handleCategory = (category) => {
        setCategory(category)
    
    }

    const [news,loading] = useNewsQuery(category.toLowerCase())

  


  return (
    <NewsFetchContext.Provider value={{news,loading,category,handleCategory}}>
    {children}
    </NewsFetchContext.Provider>
    
  )
}

export const useNewsFetch = () => useContext(NewsFetchContext)

export default NewsFetchProvider
