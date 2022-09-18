import  Sequelize  from "sequelize";
export const sequelizer = new Sequelize(
    "indicadores", // db name,
    "root", // username
    "", // password
    {
      host: "localhost",
      dialect: "mysql",
    }
  );
/*('proyectos','postgres','hola1234',{
    host:'localhost',
    dialect:'postgres'
});*/