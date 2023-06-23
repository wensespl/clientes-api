import { Router } from 'express'
import {
  addCliente,
  deleteClienteById,
  getClienteById,
  getClientes,
  updateClienteById
} from '../controllers/clientes'

const router = Router()

router.route('/').get(getClientes).post(addCliente)
router
  .route('/:id')
  .get(getClienteById)
  .put(updateClienteById)
  .delete(deleteClienteById)

export default router
