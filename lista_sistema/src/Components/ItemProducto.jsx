import React from 'react'

export default function ItemProducto({producto}) {
  return (
    <div>
      <li>
      <span>{producto.nombre}</span>
      <span>{producto.categoria}</span>
      <span>{producto.precio}</span>
      <span className={producto.stock === 0 ? "stock sin-stock" : "stock"}>
        {producto.stock === 0 ? "sin stock" : `Stock: ${producto.stock}`}
      </span>
      </li>
    </div>
  )
}





