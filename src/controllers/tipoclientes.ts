import { Request, Response } from 'express'
import TipoClienteModel from '../models/TipoCliente'

export const getTiposCliente = async (_req: Request, res: Response) => {
  try {
    const tiposcliente = await TipoClienteModel.find({})
    return res.status(200).json(tiposcliente)
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}
