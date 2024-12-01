import './App.css'
import Navbar from './components/headerPage/Navbar'
import ContactForm from './components/contactPage/ContactForm'
import Footer from './components/Footer'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import About from './components/aboutPage/About'
import Service from './components/servicesPage/Service'
import HomePage from './components/homePage/HomePage'
import GenerateReceipts from './components/adminData/GenerateReceipts'
import CalculateSalary from './components/adminData/CalculateSalary'

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
          <Route path="/generate-receipts" element={<GenerateReceipts />} />
          <Route path="/calculate-salary" element={<CalculateSalary />} />
        </Routes>
        
        <Footer/>
        
    </>
  )
}

export default App
