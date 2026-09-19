
export const ProductosIniciales = [
  { id: 1, 
    nombre: "Coca Cola 500ml", 
    categoria: "Bebidas",     precio: 1200, stock: 15, codigoBarras: "7790001000015", proveedor: "Distribuidora Salta" },
  { id: 2, 
    nombre: "Alfajor Jorgito", 
    categoria: "Golosinas",   precio: 800,  stock: 0,  codigoBarras: "7790002000022", proveedor: "Preventista Norte" },
  { id: 3, 
    nombre: "Pan Lactal Bimbo", 
    categoria: "Panificados", precio: 1500, stock: 8,  codigoBarras: "7790003000039", proveedor: null },
  { id: 4, 
    nombre: "Coca Cola 500ml", 
    categoria: "Bebidas",     precio: 1200, stock: 20, codigoBarras: "7790001000022", proveedor: "Distribuidora Salta" },
  { id: 5, 
    nombre: "Fideos Matarazzo 500g", 
    categoria: "Almacén",     precio: 900,  stock: 30, codigoBarras: "7790005000053", proveedor: "Mayorista Sur" },
  { id: 6, 
    nombre: "Yerba Playadito 1kg", 
    categoria: "Almacén",     precio: 3200, stock: 5,  codigoBarras: "7790006000060", proveedor: "Distribuidora Salta" }
  ]
{ProductosIniciales.map(p => (
  <ProductCard
    key={p.id}
    nombre={p.nombre}
    precio={p.precio}
    imagen={p.imagen}
    stock={p.stock}
  />
))}






