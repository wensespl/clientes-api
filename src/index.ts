import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import { createTipoCliente } from './config/initialSetup'
import { connectDB } from './db/conection'
import clientesRouter from './routes/clientes'
import tipoClientesRouter from './routes/tipoclientes'

const app = express()
dotenv.config()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL as string

app.use(function (_req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE')
  next()
})

app.use(express.json())
app.use(cors())

app.use('/v1/clientes', clientesRouter)
app.use('/v1/tipoclientes', tipoClientesRouter)

connectDB(MONGO_URL)
createTipoCliente()

app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`)
})
