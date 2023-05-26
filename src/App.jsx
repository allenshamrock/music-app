// import Home from "./pages/Home.jsx"
// import Navbar from "./componenets/navbar/Navbar.jsx"
import Header from "./componenets/navbar/Header.jsx"
import { RootContextProvider } from './context/RootContext.jsx'
function App() {
 

  return (
    <RootContextProvider>
      <>
   <Header/>
   {/* <Home/> */}
   {/* <Navbar/> */}
  </>
    </RootContextProvider>
  )
}

export default App
