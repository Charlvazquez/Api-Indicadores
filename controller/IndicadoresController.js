import { sequelizer } from "../db/conexion.js"
import { httpError } from "../helpers/ErrorHandler.js"
import { Indicadores } from "../models/Indicadores2022.js"
import { Op } from "sequelize";


export const getIndicadores = async(req,res)=>{
    try {
        const indicadores = await Indicadores.findAll()
        res.json(indicadores)
    } catch (e) {
        httpError(res,e)
    }
}

export const getTamaulipas = async(req,res)=>{
    try {
        const tamaulipas = await Indicadores.findAll({
            where: {
                estado: 'Tamaulipas'
            }
          });
        res.json(tamaulipas)
    } catch (e) {
       httpError(res, e)
    }
}
//controladores para municipios del estado de tamaulipas
export const HomicidiosMunicipio = async (req,res)=>{
    try {
        const homicidios = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    subtipo_delito:{
                        [Op.like]:'%HOMICIDIO DOLOSO%'
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(homicidios)
    } catch (e) {
        httpError(res, e)
    }
}

export const HomicidiosCulpMunicipio = async (req,res)=>{
    try {
        const homicidios = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    subtipo_delito:{
                        [Op.like]:'%HOMICIDIO CULPOSO%'
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(homicidios)
    } catch (e) {
        httpError(res, e)
    }
}

export const SecuestroMunicipio = async (req,res)=>{
    try {
        const secuestro = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    tipo_delito:{
                        [Op.like]:'%Secuestro%'
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(secuestro)
    } catch (e) {
        httpError(res, e)
    }
}

export const ExtorsionMunicipio = async (req,res)=>{
    try {
        const extorsion = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    tipo_delito:{
                        [Op.like]:'%Extorsion%'
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(extorsion)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboViolenciaMunicipio = async(req,res)=>{
    try {
        const roboVi = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    modalidad:{
                        [Op.like]:'%con violencia%'
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(roboVi)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboAuto = async(req,res)=>{
    try {
        const roboAuto = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%vehiculo automotor%'
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(roboAuto)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboCasa = async(req,res)=>{
    try {
        const roboCasa = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%casa habitacion%' 
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(roboCasa)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboNegocio = async(req,res)=>{
    try {
        const roboNegocios = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%negocio%' 
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(roboNegocios)
    } catch (e) {
        httpError(res, e)
    }
}

export const FeminicidiosMunicipio = async(req,res)=>{
    try {
        const feminicidiosMun = await Indicadores.findAll({
            attributes:['municipio',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                estado:{
                    [Op.like]:'%TAMAULIPAS%'
                }, 
                    tipo_delito:{
                        [Op.like]:'%Feminicidio%'
                    }
            },
            group: ['Indicadores.municipio'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(feminicidiosMun)
    } catch (e) {
        httpError(res, e)
    }
}

//controladores para estado de Mexico
export const HomidicidiosDoEstado = async(req,res)=>{
    try {
        const homicidioEstado = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{ 
                    subtipo_delito:{
                        [Op.like]:'%HOMICIDIO DOLOSO%'
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(homicidioEstado)
    } catch (e) {
        httpError(res, e)
    }
}

export const HomidicidiosCulEstado = async(req,res)=>{
    try {
        const homicidioEstado = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{ 
                    subtipo_delito:{
                        [Op.like]:'%HOMICIDIO CULPOSO%'
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(homicidioEstado)
    } catch (e) {
        httpError(res, e)
    }
}

export const SecuestroEstado = async(req,res)=>{
    try {
        const secuestroEstado = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{ 
                    tipo_delito:{
                        [Op.like]:'%Secuestro%'
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(secuestroEstado)
    } catch (e) {
        httpError(res, e)
    }
}

export const ExtorsionEstado = async(req,res)=>{
    try {
        const secuestroEstado = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{ 
                    tipo_delito:{
                        [Op.like]:'%Extorsion%'
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(secuestroEstado)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboViolenciaEstado = async(req,res)=>{
    try {
        const roboVi = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{ 
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    modalidad:{
                        [Op.like]:'%con violencia%'
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(roboVi)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboAutoEstado = async(req,res)=>{
    try {
        const roboAuto = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%vehiculo automotor%'
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(roboAuto)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboCasaEstado = async(req,res)=>{
    try {
        const roboCasa = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%casa habitacion%' 
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(roboCasa)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboNegocioEstado = async(req,res)=>{
    try {
        const roboNegocios = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{ 
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%negocio%' 
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(roboNegocios)
    } catch (e) {
        httpError(res, e)
    }
}

export const FeminicidiosEstado = async(req,res)=>{
    try {
        const feminicidiosMun = await Indicadores.findAll({
            attributes:['estado',[sequelizer.fn('sum', sequelizer.col('casos')),'casos']],
            where:{
                    tipo_delito:{
                        [Op.like]:'%Feminicidio%'
                    }
            },
            group: ['Indicadores.estado'],
            raw:true,
            order: sequelizer.literal('casos DESC')
                 
        })
        res.json(feminicidiosMun)
    } catch (e) {
        httpError(res, e)
    }
}


/* controladores para datos de todo el pais */
export const HomidicidiosDoPais = async(req,res)=>{
    try {
        const homicidioPais = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'h_dol']],
            where:{ 
                    subtipo_delito:{
                        [Op.like]:'%HOMICIDIO DOLOSO%'
                    }
            },
            raw:true,
                 
        })
        res.json(homicidioPais)
    } catch (e) {
        httpError(res, e)
    }
}

export const HomidicidiosCulPais = async(req,res)=>{
    try {
        const homicidioPais = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'h_culp']],
            where:{ 
                    subtipo_delito:{
                        [Op.like]:'%HOMICIDIO CULPOSO%'
                    }
            },
            raw:true,
                 
        })
        res.json(homicidioPais)
    } catch (e) {
        httpError(res, e)
    }
}

export const SecuestroPais = async(req,res)=>{
    try {
        const secuestroPais = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'secuestros']],
            where:{ 
                    tipo_delito:{
                        [Op.like]:'%Secuestro%'
                    }
            },
            raw:true
                 
        })
        res.json(secuestroPais)
    } catch (e) {
        httpError(res, e)
    }
}

export const ExtorsionPais = async(req,res)=>{
    try {
        const extorsionPais = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'extorsion']],
            where:{ 
                    tipo_delito:{
                        [Op.like]:'%Extorsion%'
                    }
            },
            raw:true,
                 
        })
        res.json(extorsionPais)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboViolenciaPais = async(req,res)=>{
    try {
        const roboVi = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'robo_violencia']],
            where:{ 
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    modalidad:{
                        [Op.like]:'%con violencia%'
                    }
            },
            raw:true            
        })
        res.json(roboVi)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboAutoPais = async(req,res)=>{
    try {
        const roboAuto = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'robo_autos']],
            where:{
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%vehiculo automotor%'
                    }
            },
            raw:true
                 
        })
        res.json(roboAuto)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboCasaPais = async(req,res)=>{
    try {
        const roboPais = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'robo_casa']],
            where:{
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%casa habitacion%' 
                    }
            },
            raw:true        
        })
        res.json(roboPais)
    } catch (e) {
        httpError(res, e)
    }
}

export const RoboNegocioPais = async(req,res)=>{
    try {
        const roboNegocios = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'robo_negocio']],
            where:{ 
                    tipo_delito:{
                        [Op.like]:'%Robo%'
                    },
                    subtipo_delito:{
                        [Op.like]:'%negocio%' 
                    }
            },
            raw:true,
        })
        res.json(roboNegocios)
    } catch (e) {
        httpError(res, e)
    }
}

export const FeminicidiosPais = async(req,res)=>{
    try {
        const feminicidiosPais = await Indicadores.findAll({
            attributes:[[sequelizer.fn('sum', sequelizer.col('casos')),'feminicidios']],
            where:{
                    tipo_delito:{
                        [Op.like]:'%Feminicidio%'
                    }
            },
            raw:true
                 
        })
        res.json(feminicidiosPais)
    } catch (e) {
        httpError(res, e)
    }
}