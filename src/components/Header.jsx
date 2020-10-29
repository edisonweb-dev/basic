import React from 'react'


function Header ({titulo}){

  
  const edad = 18;
  let mensaje;

  if(edad === 18){
    mensaje = "eres mayor de edad";
  }else{
    mensaje = "eres menor de edad";
  }

  return (
    <div>
      <h1 id="encabezado" className="encabezado">{titulo}</h1>
      <h1>{mensaje} {edad} </h1>
    </div>
  );

}
export default Header;