import Header, {Fragment, useState} from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'



function App() {

  //crear listado de productos
  const [ productos, guardarProducto ] = useState([
    {id: 1, nombre: 'Camisa React', precio: 50}
    {id: 2, nombre: 'Camisa PHP', precio: 40}
    {id: 3, nombre: 'Camisa NodeJs', precio: 30}
    {id: 4, nombre: 'Camisa Express', precio: 20}
  ]);

  //State para un carrito de compras
  const [ carrito, agregarProducto] = useState([]);

  //obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo="tienda virtual"
        numero={20}
      />
        <h1>Lista de Producto</h1>
        { productos.map( producto => (
          <Producto 
            key={producto.id}
            producto={producto}
            carrito={carrito}
            productos={productos}
            agregarProducto={agregarProducto}
          />
        )) }

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
