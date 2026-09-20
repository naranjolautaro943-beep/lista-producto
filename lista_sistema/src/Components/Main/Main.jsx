import React from 'react'
import './Main.css'
import Catalogo_Productos from '../Productos/Catalogo_Productos'


export default function Main({ abierto, estadoPantalla, setEstadoPantalla, productosBase }) {
    return (
    <div className={abierto ? 'main-wrapper abierto' : 'main-wrapper cerrado'}>

        <main className="main">
        <div className="container">  

        <h1>Bienvenido!</h1>
            <p className="Explicacion">Sistema de gestión para administrar las operaciones de tu kiosco.
                Desde acá podés gestionar ventas, productos, clientes y controlar el stock.</p>


            <div className="bloques-superiores">

                <section className="bloque cliente">
                    <h2>CLIENTE</h2>

                    <div className="fila">

                        <div className="campo codigo">
                            <label>Código</label>
                            <input type="text" defaultValue="1" />
                        </div>

                        <div >
                            <label>Nombre / Razón social</label>
                            <input
                                type="text"
                                defaultValue="Cliente de prueba"
                            />
                        </div>

                    </div>

                    <div className="fila">

                        <div className="campo cuit">
                            <label>CUIT</label>
                            <input
                                type="text"
                                placeholder="00-00000000-0"
                            />
                        </div>

                        <div>
                            <label>Condición frente al IVA</label>
                            <select defaultValue="Consumidor Final">
                                <option>Consumidor Final</option>
                                <option>Responsable Inscripto</option>
                                <option>Monotributista</option>
                                <option>Exento</option>
                            </select>
                        </div>

                    </div>
                </section>


                <section className="bloque comprobante">
                    <h2>COMPROBANTE</h2>

                    <div className="fila">

                        <div className="campo tipo">
                            <label>Tipo</label>
                            <select defaultValue="Factura B">
                                <option>Factura B</option>
                                <option>Factura A</option>
                                <option>Factura C</option>
                            </select>
                        </div>

                        <div>
                            <label>Número</label>
                            <input
                                type="text"
                                defaultValue="0004-00000589"
                            />
                        </div>

                    </div>

                    <div className="fila">

                        <div>
                            <label>Tipo de pago</label>

                            <div>
                                <button className="activo">
                                    Contado
                                </button>

                                <button>
                                    Cuenta corriente
                                </button>
                            </div>
                        </div>

                        <div>
                            <label>Medio de pago</label>

                            <select>
                                <option>Efectivo</option>
                                <option>Débito</option>
                                <option>Crédito</option>
                                <option>Transferencia</option>
                            </select>
                        </div>

                    </div>
                </section>

            </div>
            <section className="cargar-producto">

                <h2>Producto</h2>
                <p>Este bloque permite agregar productos a la venta por su código</p>

                <div className="barra-producto">

                    <input
                        type="text"
                        placeholder="⌕  Código de barras del producto"
                    />

                    <input
                        type="number"
                        defaultValue="1"
                    />

                    <button>
                        Agregar
                    </button>

                </div>

            </section>



            <div className="ventanas">
                    <div className="table-responsive small tabla-ventas">
                            <section className="cuadros">
                                <h2>Ventas recientes</h2>
                            </section>
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">CODIGO</th>
                                <th scope="col">NOMBRE</th>
                                <th scope="col">CANTIDAD</th>
                                <th scope="col">PRECIO u.</th>
                                <th scope="col">Importe</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Leche 1L Sancor</td>
                                <td>2</td>
                                <td>$3.500</td>
                                <td>$7.000</td>
                            </tr>

                            <tr>
                                <td>002</td>
                                <td>Yogurt Mu 1L</td>
                                <td>1</td>
                                <td>$3.500</td>
                                <td>$3.500</td>
                            </tr>

                            <tr>
                                <td>003</td>
                                <td>Galletitas Oreo 200g</td>
                                <td>4</td>      
                                <td>$1.200</td>
                                <td>$4.800</td>

                            </tr>

                            <tr>
                                <td>004</td>    
                                <td>Gaseosa Coca Cola 2L</td>
                                <td>1</td>
                                <td>$3.800</td> 
                                <td>$3.800</td>
                            </tr>

                            <tr>
                                <td>005</td>
                                <td>Agua Mineral 500ml</td>
                                <td>2</td>
                                <td>$4.900</td>
                                <td>$9.800</td>
                            </tr>

                            <tr>
                                <td>006</td>
                                <td>Jugo Cepita 1L</td>
                                <td>1</td>
                                <td>$2.300</td>
                                <td>$2.300</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

    <div className="totales">

        <p>
        Este bloque muestra los totales de la venta, aqui se mostrarán los cálculos finales.
        </p>

        <div className="fila-total">
            <span>Subtotal</span>
            <span>$0,00</span>
        </div>

        <div className="fila-total">
            <span>Descuento %</span>

            <input type="number" defaultValue="0"/>
    </div>

        <hr />

        <div className="fila-total total">
            <strong>Total</strong>
            <strong>$0,00</strong>
        </div>

            </div>
                <div className="botones-finales">

                <button className="cancelar">
                    Cancelar venta
                </button>

                <button className="generar">
                    ▣ &nbsp; Generar comprobante (F9)
                </button>

        </div>

        

            <Catalogo_Productos
                estadoPantalla={estadoPantalla}
                setEstadoPantalla={setEstadoPantalla}
                productosBase={productosBase}
            />

            <br></br>



                <br></br>
                <h2>Información Rápida</h2>

                <div className="accesos">

                    <div className="info-card">
                        <h3>Ventas de hoy</h3>
                        <p className="card-text">Total: $55.348,32</p>
                    </div>

                    <div className="info-card">
                        <h3>Stock Bajo</h3>
                        <p className="card-text">1</p>
                    </div>

                    <div className="info-card">
                        <h3>Pedidos</h3>
                        <p className="card-text">2 para hoy 28/08/26</p>
                    </div>

                    <div className="info-card">
                        <h3>Ventas de Ayer</h3>
                        <p className="card-text">Total: $45.678,90</p>
                    </div>

                </div>






        </div>
        </main>



    </div>
    
    )
}
