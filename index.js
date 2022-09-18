
import app from "./server.js";
import { sequelizer } from "./db/conexion.js";
//usar estos comandos para importar bdd en postgresql si aun no se crean las tablas
/*
import './models/Indicadores2022.js'
*/
const port = 5050;

async function main(){
   try {
    await sequelizer.sync({force:false})
    console.log('Conexion con base de datos');
    app.listen(port)
    console.log(`Servidor en http://localhost:${port}`);
   } catch (error) {
      console.log('Ha habido un problema con la conexion de base de datos') 
   }
}

main();
