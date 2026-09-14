import React from 'react'
import { useState } from 'react'
import { ProductosIniciales } from './ProductosIniciales'
import ItemProducto from './ItemProducto'
export default function ListaProductos() {
    const [productos] = useState(ProductosIniciales)
    const [categoriaFiltro, setCategoriaFiltro] = useState("Todas")
    const [orden, setOrden] = useState("stockAsc")
    const categorias = ["Todas", ...new Set(productos.map(p => p.categoria))]
    const productosVisibles = productos
    .filter(p => categoriaFiltro === "Todas" || p.categoria === categoriaFiltro)
    .sort((a, b) => orden === "stockAsc" ? a.stock - b.stock : b.stock - a.stock)
  return (
    <div>
      <div className="controles">
        <select value={categoriaFiltro} onChange={e => setCategoriaFiltro(e.target.value)}>
          {categorias.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <button onClick={() => setOrden(orden === "stockAsc" ? "stockDesc" : "stockAsc")}>
          Ordenar por stock ({orden === "stockAsc" ? "menor a mayor" : "mayor a menor"})
        </button>
      </div>
      <ul>
        {productosVisibles.map(p => (
          <ItemProducto key={p.codigoBarras} producto={p} />
        ))}
      </ul>
    </div>
  )
}






