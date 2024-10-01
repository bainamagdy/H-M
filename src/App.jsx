import './App.css'
import Container from './components/Container'
import HomePage from './components/homePage/HomePage'
import { Navbar } from './components/navbar/Navbar'

function App() {

  return (
    <>
      <Container>
        <Navbar />
        <HomePage />
      </Container>
    </>
  )
}

export default App
