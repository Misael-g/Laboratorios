const conexionBDExterna = (datosConexion) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datosConexion ? resolve("Conexion Ok") : reject("Error");
    }, 3000);
  });
};

conexionBDExterna(true)
  .then(respuesta => console.log(respuesta))
  .catch(error => console.log(error));

  const obtenerProductos = fetch("https://fakestoreapi.com/products");

obtenerProductos
  .then(respuesta => respuesta.json())
  .then(respuesta => console.log(`${respuesta[0].title} - ${respuesta[0].price}`))
  .catch(error => console.log(error));
