import { DataTypes } from "sequelize";
import { sequelizer } from "../db/conexion.js";


export const Indicadores = sequelizer.define(
  "indicadores",
  {
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: {
      type: DataTypes.STRING,
    },
    municipio: {
      type: DataTypes.STRING,
    },
    tipo_delito: {
      type: DataTypes.STRING,
    },
    subtipo_delito:{
        type: DataTypes.STRING
    },
    modalidad:{
        type: DataTypes.STRING
    },
    casos:{
        type: DataTypes.INTEGER
    }
  },
  {
    timestamps: false,
  }
);