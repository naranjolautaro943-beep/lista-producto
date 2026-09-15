import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import { useState } from 'react'
import Header from './Components/Header/Header'
import { ProductosIniciales } from './Components/Productos/ProductosIniciales'

function App() {
  const [abierto, setAbierto] = useState(false);  
  const [estadoPantalla, setEstadoPantalla] = useState("listo");
  const [productos] = useState(ProductosIniciales);

  const productosBase = estadoPantalla === "vacio" ? [] : productos;

  return (
    <>
      <Header/>
      <Sidebar abierto={abierto} setAbierto={setAbierto}/>
      <Main
        abierto={abierto}
        estadoPantalla={estadoPantalla}
        setEstadoPantalla={setEstadoPantalla}
        productosBase={productosBase}
      />
      <Footer/>
    </>
  )
}

export default App