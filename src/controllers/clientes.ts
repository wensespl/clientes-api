import { Request, Response } from 'express'
import ClienteModel from '../models/Cliente'

export const getClientes = async (_req: Request, res: Response) => {
  try {
    const clientes = await ClienteModel.find({}).populate('tipoCliente')
    return res.status(200).json(clientes)
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}

export const getClienteById = async (req: Request, res: Response) => {
  try {
    const { id: idCliente } = req.params
    const cliente = await ClienteModel.findById(idCliente).populate(
      'tipoCliente'
    )
    if (!cliente) {
      return res.status(404).json({ msg: 'Cliente no existe' })
    }
    return res.status(200).json(cliente)
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}

export const addCliente = async (req: Request, res: Response) => {
  try {
    const cliente = await ClienteModel.create(req.body)
    return res.status(201).json(cliente)
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}

export const updateClienteById = async (req: Request, res: Response) => {
  try {
    const { id: idCliente } = req.params
    const cliente = await ClienteModel.findByIdAndUpdate(idCliente, req.body, {
      new: true
    }).populate('tipoCliente')
    if (!cliente) {
      return res.status(404).json({ msg: 'Cliente no existe' })
    }
    return res.status(200).json(cliente)
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}

export const deleteClienteById = async (req: Request, res: Response) => {
  try {
    const { id: idCliente } = req.params
    const cliente = await ClienteModel.findByIdAndDelete(idCliente)
    if (!cliente) {
      return res.status(404).json({ msg: 'Cliente no existe' })
    }
    return res.status(204).json({})
  } catch (error) {
    return res.status(500).json({ msg: error })
  }
}
