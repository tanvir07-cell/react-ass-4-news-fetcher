import Footer from "./components/Footer/Footter"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import NewsFetchProvider from "./context/NewsFetchProvider"
import SearchNewsFetchProvider from "./context/SearchNewsFetchProvider"

const App = () => {
  return (
    <>
    <NewsFetchProvider>
      <SearchNewsFetchProvider>
      <Header/>
      <Main/>
      
      </SearchNewsFetchProvider>
      
    </NewsFetchProvider>
    <Footer/>
    </>
  )
}

export default App
