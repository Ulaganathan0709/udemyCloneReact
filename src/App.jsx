
import Categories from './components/categories'
import Navbar from './components/Navbar'
import Recommended from './components/Recommended'
import Topics from './components/Topics'
import PopularSessions from './components/PopularSessions'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Categories></Categories>
      <Recommended></Recommended>
      <Topics></Topics>
      <PopularSessions></PopularSessions>
      <Footer></Footer>
    </>
  )
}

export default App
