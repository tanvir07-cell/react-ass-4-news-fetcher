export default function getDate(date){

    if(!date){
        return new Date().toLocaleDateString("en-us",{

            month:"long",
            day:"numeric",
            year:"numeric",
            hour:"numeric",
            minute:"numeric",
            

        })
    }


    return new Date(date).toLocaleDateString("en-us",{

                                    month:"long",
                                    day:"numeric",
                                    year:"numeric",
                                    hour:"numeric",
                                    minute:"numeric",
                                    

                                })
} 