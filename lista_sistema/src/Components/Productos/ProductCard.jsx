export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0

  return (
    <div className={sinStock ? "card border-danger" : "card"}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">${precio}</p>
        <button className="btn btn-primary" disabled={sinStock}>
          Agregar
        </button>
      </div>
    </div>
  )
}