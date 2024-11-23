import './App.css'
import Navbar from './components/headerPage/Navbar'
import ContactForm from './components/contactPage/ContactForm'
import Footer from './components/Footer'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import About from './components/aboutPage/About'
import Service from './components/servicesPage/Service'
import HomePage from './components/homePage/HomePage'

function App() {

  return (
    <>
        <Navbar/>

        <Routes> 
          <Route path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/services' element={<Service/>} />
          <Route path='/contact' element={<ContactForm/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        
        <Footer/>
        
    </>
  )
}

export default App
