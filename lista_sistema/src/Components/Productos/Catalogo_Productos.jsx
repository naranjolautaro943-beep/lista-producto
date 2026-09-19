import ListaProductos from './ListaProductos'
import './Catalogo.css'

export default function Catalogo_Productos({ estadoPantalla, setEstadoPantalla, productosBase }) {
    return (
        <section className="cuadros catalogo-productos">
        <h2>Catálogo de productos</h2>

        <div className="controles-simulacion">
            <button onClick={() => setEstadoPantalla("cargando")}>Simular cargando</button>
            <button onClick={() => setEstadoPantalla("error")}>Simular error</button>
            <button onClick={() => setEstadoPantalla("vacio")}>Simular sin productos</button>
            <button onClick={() => setEstadoPantalla("listo")}>Ver productos</button>
    </div>

    {estadoPantalla === "cargando" && <p>Cargando productos...</p>}

    {estadoPantalla === "error" && (
        <p className="mensaje-error">Ocurrió un error al cargar los productos. Intentá nuevamente.</p>
    )}

    {(estadoPantalla === "vacio" || estadoPantalla === "listo") &&
        productosBase.length === 0 && (
        <p>No hay productos cargados en el sistema.</p>
    )}

    {estadoPantalla === "listo" && productosBase.length > 0 && (
        <ListaProductos productos={productosBase} />
    )}
    </section>
    
    )
}