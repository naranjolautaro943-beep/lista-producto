import React from 'react'

function ItemProducto({producto}) {
  return (
    
      <li>
      <span>{producto.nombre}</span>
      <span>{producto.categoria}</span>
      <span>{producto.precio}</span>
      <span className={producto.stock === 0 ? "stock sin-stock" : "stock"}>
        {producto.stock === 0 ? "sin stock" : `Stock: ${producto.stock}`}
      </span>
      <span>Proveedor: {producto.proveedor ?? "Sin proveedor asignado"}</span>
      </li>
  )
}

export default ItemProducto;





