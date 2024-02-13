import { useNewsFetch } from "../../context/NewsFetchProvider"
import { useSearchNewsFetch } from "../../context/SearchNewsFetchProvider"
import getDate from "../../utils"

const NewsList = () => {

    const {news,loading,category} = useNewsFetch()

    const {searchQuery} = useSearchNewsFetch()

    const filteredNews = news?.articles?.filter((item)=>{
        return item.title.toLowerCase().includes(searchQuery)
    })
   
    return(
        <>

        {/* loading state */}
{
            loading.status && <div className="text-center text-3xl z-50 bg-black h-[100%] w-[100%]

             bg-opacity-80 text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-lg
              flex items-center justify-center
            
            ">{loading.message}</div>
}


        
        {
            !searchQuery && <h1 className="text-center mb-5 text-xl bg-black/10  text-black rounded p-2 w-[50%] mx-auto">Total Result of {category?category:"General"} : {news.totalResults}</h1>
        }
       
        <div
            className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8 container"
        >

            <div className="col-span-12 grid grid-cols-12 gap-4">
                {
                    filteredNews?.length === 0 && <h1 className="text-center text-2xl col-span-12 bg-black/10  text-black rounded p-2 w-[50%] mx-auto">{searchQuery} is not Found on this {category?category:"General"}❌</h1>
                }
                
                {filteredNews?.map((item,index)=>{
                    return(
                        <div key={index} className="col-span-12 lg:col-span-4">
                            
                            <img src={item.urlToImage} alt={item.title}/>
                            <a
                                ><h3
                                    className="mb-2.5 text-2xl font-bold lg:text-[28px]"
                                >
                                    {item.title}
                                </h3></a
                            >
                            <p className="text-base text-[#5C5955]">
                                {item.description}
                            </p>
                            <p className="mt-5 text-base text-[#5C5955]">
                                {getDate(item.publishedAt)}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default NewsList
