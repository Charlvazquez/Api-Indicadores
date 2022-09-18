import { Router } from "express";
import { ExtorsionEstado, ExtorsionMunicipio, ExtorsionPais, FeminicidiosEstado, FeminicidiosMunicipio, FeminicidiosPais, getIndicadores, getTamaulipas, HomicidiosCulpMunicipio, HomicidiosMunicipio, HomidicidiosCulEstado, HomidicidiosCulPais, HomidicidiosDoEstado, HomidicidiosDoPais, RoboAuto, RoboAutoEstado, RoboAutoPais, RoboCasa, RoboCasaEstado, RoboCasaPais, RoboNegocio, RoboNegocioEstado, RoboNegocioPais, RoboViolenciaEstado, RoboViolenciaMunicipio, RoboViolenciaPais, SecuestroEstado, SecuestroMunicipio, SecuestroPais } from "../controller/IndicadoresController.js";

const router = Router();

router.get('/',getIndicadores);
router.get('/indicadores/tamaulipas/',getTamaulipas);
//indicadores para municipios de Tamaulipas o el estado que se necesite saber
router.get('/homicidios/dolosos/tamaulipas/',HomicidiosMunicipio);
router.get('/homicidios/culposos/tamaulipas',HomicidiosCulpMunicipio);
router.get('/secuestros/tamaulipas',SecuestroMunicipio);
router.get('/extorsiones/tamaulipas',ExtorsionMunicipio);
router.get('/robo/violencia/tamaulipas',RoboViolenciaMunicipio);
router.get('/robo/autos/tamaulipas',RoboAuto);
router.get('/robo/casa/habitacion/tamaulipas',RoboCasa);
router.get('/robo/negocio/tamaulipas',RoboNegocio);
router.get('/feminicidios/tamaulipas',FeminicidiosMunicipio);
 
//indicadores para estados de Mexico
router.get('/homicidios/dolosos/estados/Mexico/',HomidicidiosDoEstado);
router.get('/homicidios/culposos/estados/Mexico/',HomidicidiosCulEstado);
router.get('/secuestros/estados/Mexico/',SecuestroEstado);
router.get('/extorsiones/estados/Mexico/',ExtorsionEstado);
router.get('/robo/violencia/estados/Mexico/',RoboViolenciaEstado);
router.get('/robo/autos/estados/Mexico/',RoboAutoEstado);
router.get('/robo/casa/habitacion/estados/Mexico/',RoboCasaEstado);
router.get('/robo/negocios/estados/Mexico/',RoboNegocioEstado);
router.get('/feminicidios/estados/Mexico/',FeminicidiosEstado);

//rutas de indicadores en general de Mexico
router.get('/homicidios/dolosos/Mexico/',HomidicidiosDoPais);
router.get('/homicidios/culposos/Mexico/',HomidicidiosCulPais);
router.get('/secuestros/Mexico/',SecuestroPais);
router.get('/extorsiones/Mexico/',ExtorsionPais);
router.get('/robo/violencia/Mexico/',RoboViolenciaPais);
router.get('/robo/autos/Mexico/',RoboAutoPais);
router.get('/robo/casa/habitacion/Mexico/',RoboCasaPais);
router.get('/robo/negocios/Mexico/',RoboNegocioPais);
router.get('/feminicidios/Mexico/',FeminicidiosPais);

export default router;