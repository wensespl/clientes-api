import { Router } from 'express'
import { getTiposCliente } from '../controllers/tipoclientes'

const router = Router()

router.route('/').get(getTiposCliente)

export default router
