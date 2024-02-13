import { useEffect, useRef, useState } from "react"

const useNewsQuery = (category,searchQuery) => {
    const [news,setNews] = useState({})
    const [loading,setLoading] = useState({
        status:false,
        message:""
    
    })
    const ref = useRef()
    let url;

    if(searchQuery){
         url = `http://localhost:8000/v2/search?q=${searchQuery}`
    }

    else if(category){
         url = `http://localhost:8000/v2/top-headlines?category=${category}`}

    else{
        url = `http://localhost:8000/v2/top-headlines?category`
    
    }


    useEffect(()=>{

        setLoading((prev)=>({
            ...prev,
            status:true,
            message:"Loading...💫"
        
        }))

       

       
        
        ref.current = url;
        const fetchNews = async()=>{
        try{
            const res = await fetch(url);

            // if the url is the same as the current url
            // then we will set the news state
            // it works like a cleanup function in useEffect

            if(res.url===ref.current){
                res.json().then(data=>{
                    setNews(data)
                })
            }

        }
        catch(err){
            console.log(err)
        }

        finally{
            setLoading((prev)=>({
                ...prev,
                status:false,
                message:""
            
            }))
        }

         }

         fetchNews()

            
     
        


    },[url])

  return [news,loading]
}

export default useNewsQuery
