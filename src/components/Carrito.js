import React from 'react';
import Producto from './Producto'
import "./carrito.css"

const Carrito = ({carrito,agregarProducto}) => {
  return (
    <div className="carrito">
      <h2>Tu carrito de compras</h2>

      {/* {carrito.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
        />
      ) )} */}

      {  carrito.lenght === 0
      
        ?
          <p>No hay elementos</p>
        : 
          carrito.map(producto => (
            <Producto 
              key={producto.id}
              producto={producto}
              carrito={carrito}
              agregarProducto={agregarProducto}
            />
          ) )
      }
    </div>
  );
};

export  default Carrito;