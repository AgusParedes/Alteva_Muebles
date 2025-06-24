import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header'
import { Index } from './components/Index/Index'
import { Contacto } from './components/Contacto/Contacto.jsx'
import { SobreNosotros } from './components/SobreNosotros/SobreNosotros.jsx'
import { ColorPage } from './components/ColorPage/ColorPage.jsx'
import { Productos } from './components/Productos/Productos.jsx'
import { ProductDetailContainer } from './components/ProductDetailContainer/ProductDetailContainer.jsx'
import { Footer } from './components/Footer/Footer.jsx'
import { AdminPanel } from './components/AdminPanel/AdminPanel.jsx'
import { AdminLogin } from './components/AdminLogin/AdminLogin.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
   return (
     <div className="app-container">
       <BrowserRouter>
         <Header />
 
         <div className="main-content">
           <Routes>
              <Route path='/' element={<Index />} />
              <Route path='/Contacto' element={<Contacto />} />
              <Route path='/SobreNosotros' element={<SobreNosotros />} />
              <Route path='/Colores' element={<ColorPage />} />
              <Route path='/Productos' element={<Productos />}/>
              <Route path='/Productos/:categoryId' element={<Productos />}/>
              <Route path='/Producto/:ProductId' element={<ProductDetailContainer />}/>
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/Admin-panel" element={<AdminPanel />} />
           </Routes>
         </div>
 
         <Footer />
       </BrowserRouter>
     </div>
   )
 }

export default App
