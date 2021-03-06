import React, { createFactory } from 'react';
import './Carrito.css';
import Producto from "./Producto";


const Carrito = ({ carrito, agregarProducto }) => (
  <div className="carrito">
    <h2> Tu Carrito de compras</h2>
    {carrito.length === 0
      ?<p>no hya elementos en el carrito</p>
      :carrito.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />
      ))

    }
  </div>

);

export default Carrito;