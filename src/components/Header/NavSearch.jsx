import { useState } from "react"
import SEARCH from "../../assets/icons/search.svg"
import { useSearchNewsFetch } from "../../context/SearchNewsFetchProvider"


const NavSearch = () => {

  const {searchNews,handleSearchNews} = useSearchNewsFetch()

  const [search,setSearch] = useState("");

  console.log(searchNews)
	

  return (
     <form onSubmit={(e)=>{
        e.preventDefault()
     }}>
					<div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-black/50 focus-within:border-b-0 focus-within:rounded-md">
						<input 

						onChange={(e)=>{
							setSearch(e.target.value.toLowerCase())
							handleSearchNews(search)



						}}


						 
						className="bg-transparent  placeholder:text-black/70 text-black/90 w-full text-xs md:text-base outline-none border-none"
							type="search" placeholder="Search for news..." 
                            

                            
                            />
						<button type="submit">
							<img src={SEARCH}/>
						</button>
					</div>
	</form>
  )
}

export default NavSearch
