import React from 'react';

const Producto = ({producto,carrito,agregarProducto,productos}) => {


  const {nombre, precio, id} = producto;

  //Agregar producto al carrito
  const selecionarProducto = (id) =>{
    console.log("comprando" ,id);
    //const producto = productos.filter( producto => producto.id == id)[0]
    const producto = productos.filter( producto => producto.id == id)
    console.log(producto);
    //agregarProducto(producto);
    agregarProducto(
      ...carrito,
      ...producto
    );
  }

  //eliminar un producto del carrito
  const eliminarProducto = (id) => {
    const producto = carrito.filter( producto => producto.id !== id )

    //colocar los producto en el state
    agregarProducto(producto)
  }

  return ( 
    <div >
      <h1>El {nombre}</h1> 
      <p>{precio}</p>
      

        {productos 
          ?
           (<button 
            type="button" 
            onClick={ () => selecionarProducto(id)}
            >Comprar</button>)
          :
          (<button 
            type="button" 
            onClick={ () => eliminarProducto(id)}
            >Eliminar</button>)
        }
    </div>
  );
}
 
export default Producto;