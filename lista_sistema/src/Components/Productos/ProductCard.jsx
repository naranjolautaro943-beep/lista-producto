export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0

  return (
    <div className={sinStock ? "border border-red-500 rounded-lg shadow p-4" : "border rounded-lg shadow p-4"}>
      <img src={imagen} className="w-full h-40 object-cover rounded" alt={nombre} />
      <h5 className="text-lg font-semibold mt-2">{nombre}</h5>
      <p className="text-gray-600">${precio}</p>
      <button
        className="mt-2 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={sinStock}
      >
        Agregar
      </button>
    </div>
  )
}