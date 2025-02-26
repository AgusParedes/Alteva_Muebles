import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header'
import { Index } from './components/Index/Index'
import { Contacto } from './components/Contacto/Contacto.jsx'
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

return (
   <>
   <BrowserRouter>

   <Header/>

   <Routes>
      <Route path='/' element={ <Index/> }/>
      <Route path='/Contacto' element={ <Contacto/> }/>
      <Route path='/SobreNosotros' element={ <SobreNosotros/> }/>
   </Routes>

   <Footer/>

</BrowserRouter>
</>
   )
}

export default App
