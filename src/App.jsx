import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import NewsFetchProvider from "./context/NewsFetchProvider"

const App = () => {
  return (
    <NewsFetchProvider>
      <Header/>
      <Main/>
      
    </NewsFetchProvider>
  )
}

export default App
