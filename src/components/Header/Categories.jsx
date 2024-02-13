import { useNewsFetch } from "../../context/NewsFetchProvider"

const Categories = () => {

    const {news,loading,category,handleCategory} = useNewsFetch()
  
    
   
    
    const handleClick = (e) => {

        console.log(e.target.textContent)
        console.log(news)
        handleCategory(e.target.textContent)
        console.log(category)
    
        
    }

   
  return (
   <div className="container mx-auto mt-6">
                <ul
                    className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base"
                >
                    <li><button  onClick={(e)=>handleClick(e)}>General</button></li>
                    <li><button  onClick={(e)=>handleClick(e)}>Business</button></li>
                    <li><button onClick={(e)=>handleClick(e)}>Entertainment</button></li>
                    <li><button  onClick={(e)=>handleClick(e)}>Health</button></li>
                    <li><button  onClick={(e)=>handleClick(e)}>Science</button></li>
                    <li><button  onClick={(e)=>handleClick(e)}>Sports</button></li>
                    <li><button  onClick={(e)=>handleClick(e)}>Technology</button></li>
                </ul>
            </div>
  )
}

export default Categories
