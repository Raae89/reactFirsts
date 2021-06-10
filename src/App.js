import React, { Fragment, useState } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {

  //Crear listado de productos

  const [productos, guardarProductos] = useState([
    { id: 1, nombre: "camisa", precio: 50 },
    { id: 2, nombre: "camisa2", precio: 60 },
    { id: 3, nombre: "camisa3", precio: 70 },
    { id: 4, nombre: "camisa4", precio: 80 },
  ])

  // state para carrito

  const [carrito, agregarProducto] = useState([]);



  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header
        titulo='tienda Virtual'
      />
      <h1> Lista de productos</h1>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos = {productos}
          agregarProducto={agregarProducto}

        />
      ))}

      <Carrito 
      carrito = {carrito}
      agregarProducto={agregarProducto}
      />
      
      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
