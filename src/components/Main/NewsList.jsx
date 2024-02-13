import { useNewsFetch } from "../../context/NewsFetchProvider"

const NewsList = () => {
    const {news,loading} = useNewsFetch()

    
 
  return (
   
      <div className="container mx-auto grid grid-cols-12 gap-8">
        {
            loading.status && <div className="text-center text-3xl z-50 bg-black

            bg-opacity-50 text-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-md shadow-lg
            
            
            ">{loading.message}</div>
        }


{
 
    news.articles && news.articles.map((article,index)=>{
        return(
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="col-span-12 md:col-span-4">

                   <img src={article.urlToImage} alt={article.title}/>

                    
                    <a href="#"
                        ><h3
                            className="mb-2.5 text-xl font-bold lg:text-2xl"
                        >
                            {article.title}
                        </h3></a
                    >
                    <p className="text-base text-[#292219]">
                        {article.description}
                    </p>
                    <p className="mt-5 text-base text-[#94908C]">
                        {new Date(article.publishedAt).toLocaleDateString("en-us",{
                            day:"numeric",
                            month:"long",
                            year:"numeric"
                        
                        })}
                        {/* {article.publishedAt} */}
                    </p>
                </div>
            </div>
        )
    })
}

                {/* <div
                    className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8"
                >
                    <div className="col-span-12 grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-4">
                            <a href="#"
                                ><h3
                                    className="mb-2.5 text-2xl font-bold lg:text-[28px]"
                                >
                                    Cities have stopped being the engines of
                                    growth and opportunity they once were
                                </h3></a
                            >
                            <p className="text-base text-[#5C5955]">
                                The pandemic is dealing prodigious blows to
                                cities across the country. But the world can’t
                                hope to thrive again if its cities don’t—they’re
                                the places that have historically supplied the
                                keys for unlocking human potential. Though beset
                                by racism and other injustices, cities not only
                                provided shared, robust public infrastructure
                                like schools, libraries and transit systems,
                                they stirred together vast numbers of people
                                from different cultures and classNamees.
                            </p>
                            <p className="mt-5 text-base text-[#5C5955]">
                                1 hour ago
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-8">
                            <img
                                className="w-full"
                                src="./assets/thumb_lg.png"
                                alt="thumb"
                            />
                            <p className="mt-5 text-base text-[#5C5955]">
                                Illustration: Karolis Strautniekas
                            </p>
                        </div>
                    </div>
                    <div
                        className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
                    >
                        <div className="col-span-12 md:col-span-6">
                            <a href=""
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                    Gold hits eight-month low as higher bond
                                    yields dent its appeal
                                </h3></a
                            >
                            <p className="text-base text-[#292219]">
                                Exchange traded funds tracking the metal sustain
                                biggest outflows in a year
                            </p>
                            <p className="mt-5 text-base text-[#5C5955]">
                                1 hour ago
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-6">
                            <img
                                className="w-full"
                                src="./assets/thumb.png"
                                alt="thumb"
                            />
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="col-span-12 md:col-span-4">
                            <a href="#"
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                    Spac led by tech founders targets Europe’s
                                    unicorns for US listings
                                </h3></a
                            >
                            <p className="text-base text-[#292219]">
                                Tailwind International looks to bypass EU and UK
                                markets to build a European tech franchise
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                Yesterday
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="col-span-12 md:col-span-4">
                            <a href="#"
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                    End of ‘liquidity premium’ to unleash
                                    shareholder activism
                                </h3></a
                            >
                            <p className="text-base text-[#292219]">
                                Companies will face questioning from investors
                                on how to allow allocate excess funds
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                25 Feb 2021
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="col-span-12 md:col-span-4">
                            <a href="#"
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                    Why it is usually a mistake for investors to
                                    take profits
                                </h3></a
                            >
                            <p className="text-base text-[#292219]">
                                Why it is usually a mistake for investors to
                                take profitsA tiny number of superstar companies
                                account for returns from equity markets
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                25 Feb 2021
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="col-span-12 md:col-span-4">
                            <a href="#"
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                    Financials may be a silver lining in bond
                                    market rout
                                </h3></a
                            >
                            <p className="text-base text-[#292219]">
                                Rising longer-term rates should boost
                                profitability after many difficult years for
                                sector
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                25 Feb 2021
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="col-span-12 md:col-span-4">
                            <a href="#"
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                    Bitcoin cannot replace the banks
                                </h3></a
                            >
                            <p className="text-base text-[#292219]">
                                Cryptocurrency hopes are based on a
                                misunderstanding of how money is created
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                25 Feb 2021
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="col-span-12 md:col-span-4">
                            <a href="#"
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                    Bond turmoil heralds end of the standard
                                    portfolio
                                </h3></a
                            >
                            <p className="text-base text-[#292219]">
                                If fixed-income no longer offers stability, look
                                elsewhere for protection from equity volatility
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                25 Feb 2021
                            </p>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <div className="col-span-12 md:col-span-4">
                            <a href="#"
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                    Wall Street stocks waver as ‘bubble’ fears
                                    mount
                                </h3></a
                            >
                            <p className="text-base text-[#292219]">
                                US and Asian bourses retreat after China
                                regulator warns of inflated valuations
                            </p>
                            <p className="mt-5 text-base text-[#94908C]">
                                25 Feb 2021
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* last one section below: */}
                 
                 {/* <div className="col-span-12 self-start xl:col-span-4">
                    <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                        <div className="col-span-12 mb-6 md:col-span-8">
                            <img
                                className="w-full"
                                src="./assets/thumb.png"
                                alt="thumb"
                            />
                            <div className="col-span-12 mt-6 md:col-span-4">
                                <a href="#"
                                    ><h3
                                        className="mb-2.5 text-xl font-bold lg:text-[20px]"
                                    >
                                        Why is Uber selling its
                                        autonomous-vehicle division?
                                    </h3></a
                                >
                                <p className="text-base text-[#292219]">
                                    Self-driving cars were meant to be its
                                    future
                                </p>
                                <p className="mt-5 text-base text-[#94908C]">
                                    25 Feb 2021
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <div className="col-span-12 md:col-span-4">
                                <a href="#"
                                    ><h3
                                        className="mb-2.5 text-xl font-bold lg:text-[20px]"
                                    >
                                        Why is Uber selling its
                                        autonomous-vehicle division?
                                    </h3></a
                                >
                                <p className="text-base text-[#292219]">
                                    Self-driving cars were meant to be its
                                    future
                                </p>
                                <p className="mt-5 text-base text-[#94908C]">
                                    25 Feb 2021
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <div className="col-span-12 md:col-span-4">
                                <a href="#"
                                    ><h3
                                        className="mb-2.5 text-xl font-bold lg:text-[20px]"
                                    >
                                        Az Uber vesztesége meghaladta az
                                        egymilliárd dollárt
                                    </h3></a
                                >
                                <p className="text-base text-[#292219]">
                                    Progress in artificial intelligence belies a
                                    lack of transparency that is vital for its
                                    adoption, says Gary Marcus, coauthor of
                                    “Rebooting AI”
                                </p>
                                <p className="mt-5 text-base text-[#94908C]">
                                    21 Feb 2021
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <div className="col-span-12 md:col-span-4">
                                <a href="#"
                                    ><h3
                                        className="mb-2.5 text-xl font-bold lg:text-[20px]"
                                    >
                                        The power of liberalism can combat
                                        oppression in all its forms
                                    </h3></a
                                >
                                <p className="text-base text-[#292219]">
                                    True liberals stand for individual freedom,
                                    explains Deirdre Nansen McCloskey, an
                                    iconoclastic economist
                                </p>
                                <p className="mt-5 text-base text-[#94908C]">
                                    18 Feb 2021
                                </p>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8">
                            <div className="col-span-12 md:col-span-4">
                                <a href="#"
                                    ><h3
                                        className="mb-2.5 text-xl font-bold lg:text-[20px]"
                                    >
                                        The power of liberalism can combat
                                        oppression in all its forms
                                    </h3></a
                                >
                                <p className="text-base text-[#292219]">
                                    True liberals stand for individual freedom,
                                    explains Deirdre Nansen McCloskey, an
                                    iconoclastic economist
                                </p>
                                <p className="mt-5 text-base text-[#94908C]">
                                    18 Feb 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
               
      </div>
  )
}

export default NewsList
