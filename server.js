import express  from "express";
import indicadoresRuta from "./routes/indicadores.js";
import morgan from "morgan";
import cors from 'cors'

const app = express();

//middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());

//rutas
app.use("/indicadores",indicadoresRuta)

export default app;