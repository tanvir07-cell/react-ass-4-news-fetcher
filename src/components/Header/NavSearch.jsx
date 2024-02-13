import SEARCH from "../../assets/icons/search.svg"
import { useSearchNewsFetch } from "../../context/SearchNewsFetchProvider"
import useDebounce from "../../hooks/useDebounce"


const NavSearch = () => {

	const {searchQuery,handleSearchQuery} = useSearchNewsFetch()


   const debounceChange = useDebounce(()=>{

	// after 1000ms the searchQuery will be updated

	handleSearchQuery(searchQuery)

	


   })
   
	

  return (
     <form onSubmit={(e)=>{
        e.preventDefault()
     }}>
					<div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-black/50 focus-within:border-b-0 focus-within:rounded-md">
						<input 

						onChange={(e)=>{
                            debounceChange()
							handleSearchQuery(e.target.value.toLowerCase())
							



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
