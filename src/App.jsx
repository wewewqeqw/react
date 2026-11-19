
import './App.css'
import Header from './components/Header'
import Footer from './components/footer'
import Scetion from './components/Scetion'
function App() {
  
const getGreeting=(name)=>`안녕 ${name}`
  return (
    <main>
     <Header/>
  <Footer/>     
     <h1>Hello React</h1>
     <p>{getGreeting('Alice')}</p>
    </main>
  )
}

export default App
