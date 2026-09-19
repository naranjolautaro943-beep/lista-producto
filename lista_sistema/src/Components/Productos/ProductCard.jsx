export default function ProductCard({ nombre, precio, imagen, stock }) {
  const sinStock = stock === 0

  return (
    <div className={sinStock ? "card has-background-danger-light" : "card"}>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={imagen} alt={nombre} />
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-5">{nombre}</p>
        <p className="subtitle is-6">${precio}</p>
        <button className="button is-primary" disabled={sinStock}>
          Agregar
        </button>
      </div>
    </div>
  )
}